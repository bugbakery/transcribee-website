import Image from 'next/image';

import { Page } from '../components/Page';
import AppPreviewSrc from '../assets/app-preview.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center my-6 sm:my-12">
      <div className="text-center md:text-left items-center md:items-start flex flex-col">
        <h1 className="text-[calc(min(50px,10vw_+_3px))] md:text-[calc(min(60px,3.8vw_+_12px))] font-semibold mb-6 leading-tight">
          Transcriptions
          <br />
          for everyone.
        </h1>
        <p className="text-lg leading-6 mb-6 max-w-sm">
          We offer an open source tool for automatic transcriptions with word-level time alignment
          and collaborative editing.
        </p>

        <p className="text-lg leading-6 mb-6 max-w-sm">
          Perfect for interviews, podcasts, video subtitles or voice recordings.
        </p>

        <a
          href="https://transcribee.net/signup"
          className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
        >
          Get started for free →
        </a>
      </div>
      <div className="flex items-center flex-grow w-full">
        <Image
          src={AppPreviewSrc}
          alt="Overview of the transcribee application"
          className="rounded-md w-full aspect-[3/2] border border-1 border-gray-300 shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Page>
      <Hero />
    </Page>
  );
}
