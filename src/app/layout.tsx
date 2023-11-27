import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    absolute: 'transcribee – The open source automatic transcription tool',
    template: '%s — transcribee',
  },
  openGraph: {
    title: {
      absolute: 'transcribee – The open source automatic transcription tool',
      template: '%s — transcribee',
    },
    description: 'The open source automatic transcription tool',
    siteName: 'transcribee',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
