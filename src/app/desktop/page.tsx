import React from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import Link from 'next/link';
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Desktop',
  openGraph: {
    title: 'transcribee desktop',
  },
};

export default function PricingPage() {
  return (
    <Page>
      <h2 className="text-center text-5xl font-semibold my-4">transcribee desktop</h2>
      <div className="text-center my-4">
        Keep your data local. Transcribe for free.
      </div>

      <h3 className='text-center font-semibold mt-16 text-xl'>Download the alpha version of transcribee desktop:</h3>

      <div className="flex my-16 flex-wrap gap-16 lg:gap-0 max-w-[500px] lg:max-w-none mx-auto lg:mx-none">
        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[360px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaLinux className='text-[200px]' />
          <h4 className="font-bold text-xl mt-4">Linux</h4>
          <div className='justify-center items-center flex flex-col h-full mt-8 gap-2'>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              x86_64 AppImage
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              aarch64 AppImage
            </Link>
          </div>
        </div>
        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[360px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaWindows className='text-[200px]' />
          <h4 className="font-bold text-xl mt-4">Windows</h4>
          <div className='justify-center items-center flex flex-col h-full mt-8 gap-2'>

            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              x86_64 installer
            </Link>
          </div>
        </div>

        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[360px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaApple className='text-[200px]' />
          <h4 className="font-bold text-xl mt-4">MacOS</h4>

          <div className='justify-center items-center flex flex-col h-full mt-8 gap-2'>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              Apple Silicon DMG
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              Intel DMG
            </Link>
          </div>
        </div>
      </div>

      <div className="flex my-16 gap-4 flex-wrap max-w-[500px] lg:max-w-none mx-auto lg:mx-none">
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[400px]">
          <h3 className="text-2xl font-medium">Slow Computer?</h3>
          <p>
            The automatic transcription feature of transcribee desktop is fairly slow on older computers.
            For people with slower computers, transcribee web might be a better choice.
          </p>
        </div>
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[300px]">
          <h3 className="text-2xl font-medium">transcribee web</h3>
          <p>
            You are working in a team or are part of an organization that would benefit from
            a tool for collaborative transcription? Try
            Try <Link href="/web" className="underline">
              transcribee web
            </Link> for a browser-based transcription tool.
          </p>
        </div>
      </div>

    </Page>
  );
}
