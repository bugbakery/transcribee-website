import React, { ComponentProps, ReactNode } from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import Image from 'next/image';
import DesktopHomeSrc from '../../assets/desktop-home.png';
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
      <h3 className="text-center my-4">
        Keep your data local. Transcribe for free.
      </h3>

      Download the Alpha version of transcribee desktop!

      <div className="flex my-16 flex-wrap gap-16 lg:gap-0 max-w-[500px] lg:max-w-none mx-auto lg:mx-none">
        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[400px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaLinux className='text-[200px]' />
          <h4 className="font-bold text-xl">Linux</h4>
          <div className='justify-end flex flex-col h-full'>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
            >
              Download x86_64 .AppImage
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
            >
              Download aarch64 .AppImage
            </Link>
          </div>
        </div>
        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[400px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaWindows className='text-[200px]' />
          <h4 className="font-bold text-xl">Windows</h4>
          <div className='justify-end flex flex-col h-full'>

            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
            >
              Download x86_64 .exe
            </Link>
          </div>
        </div>

        <div className={clsx(
          'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
          'flex-grow basis-0 h-[400px] flex flex-col py-14 px-1 mx-4 items-center',
          'min-w-full lg:min-w-[340px]',
          'bg-white',
        )}
        >
          <FaApple className='text-[200px]' />
          <h4 className="font-bold text-xl">MacOS</h4>

          <div className='justify-end flex flex-col h-full'>

            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
            >
              Download Intel .dmg
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-2"
            >
              Download Apple Silicon .dmg
            </Link>
          </div>
        </div>
      </div>

      - Maybe releasenotes

      <div className="flex my-16 gap-4 flex-wrap max-w-[500px] lg:max-w-none lg:max-w-none mx-auto lg:mx-none">
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
