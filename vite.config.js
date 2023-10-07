import { defineConfig } from 'vite';
import { favicons } from 'favicons';
import fs from 'fs';
import * as mime from 'mime-types';

function faviconPlugin(originalPath) {
  const files = {};
  function addFiles(ctx, fileName, source) {
    ctx.emitFile({ type: 'asset', fileName, source });
    files[`/${fileName}`] = source;
  }

  return {
    name: 'favicon-plugin', // required, will show up in warnings and errors
    async buildStart() {
      const response = await favicons(originalPath, {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          windows: false,
          yandex: false,

          favicons: true,
        },
      });

      addFiles(this, 'favicon.svg', fs.readFileSync(originalPath));
      response.images.forEach((img) => {
        addFiles(this, img.file, img.contents);
      });
    },
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          if (req.originalUrl in files) {
            res.setHeader('Content-Type', mime.contentType(mime.lookup(req.originalUrl)));
            res.write(files[req.originalUrl]);
            res.end();
          }
          next();
        });
      };
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  base: '', // this fixes hosting under non root locations
  plugins: [
    faviconPlugin('./src/assets/transcribee-logo.svg'),
  ],
});
