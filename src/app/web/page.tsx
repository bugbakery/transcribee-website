import React, { ComponentProps, ReactNode } from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web',
  openGraph: {
    title: 'Transcribee Web',
  },
};

export default function PricingPage() {
  return (
    <Page>
      <h2 className="text-center text-5xl font-semibold my-4">Transcribee Web</h2>
      <h3 className="text-center my-4">
        For organizations and workgroups. Collaborate with others.
      </h3>

      - We host a demo / beta instance that you can use for trying out transcribee web
      - You can <Link href="/signup" className='underline'>sign up</Link> for it.
      - Transcribee web does the transcription on a server, and while that means that the transcribed 
      data leaves your computer, it is possible to use transcribee web with older computers.

      - If you need custom features, have comments, questions or need support, please get in touch.



      <div className="flex my-16 gap-4 flex-wrap max-w-[500px] lg:max-w-none lg:max-w-none mx-auto lg:mx-none">
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[400px]">
          <h3 className="text-2xl font-medium">Host it yourself</h3>
          <p>
            transcribee is 100% open source software. You can setup your own instance.{' '}
            No license costs apply. If you need consulting or support, please <Link href="/contact" className="underline">
              Contact Us
            </Link>.
          </p>
        </div>
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[300px]">
          <h3 className="text-2xl font-medium">transcribee desktop</h3>
          <p>
            You are working alone or it is important that your data does not leave your computer?
            Try <Link href="/desktop" className="underline">
              transcribee desktop
            </Link> for a fully local app that you can run on your own computer.
          </p>
        </div>
      </div>
    </Page>
  );
}
