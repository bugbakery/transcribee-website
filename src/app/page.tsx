import Image, { StaticImageData } from 'next/image';

import { Page } from '../components/Page';
import { ReactNode } from 'react';

import AppPreviewSrc from '../assets/app-preview.png';
import WorkerPopupSrc from '../assets/worker_popup.png';
import ExportSrc from '../assets/export.png';
import CorrectSrc from '../assets/correction.svg';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <Block
        heading="State of the art automatic transcription."
        image={
          <Image
            src={WorkerPopupSrc}
            alt={'An image of the transcribee popup showing the automatic transcription status'}
            className="rounded-md w-[530px] px-10"
          />
        }
      >
        transcribee uses the open source <i>Whisper</i> machine-learning (ML) model to create high
        quality automated transcriptions.
      </Block>
      <Block
        heading="Manual Refinement"
        image={
          <Image
            src={CorrectSrc}
            alt={'An image of the transcribee popup showing the automatic transcription status'}
            className="rounded-md w-[530px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
          />
        }
        imageOnRight={true}
      >
        Automatic transcripts can easily be manually corrected. Words that are likely not correct
        are highlighted for speedy corrections.
      </Block>
      <Block
        heading="Export"
        image={
          <Image
            src={ExportSrc}
            alt={'An image of the transcribee popup showing the automatic transcription status'}
            className="rounded-md w-[480px] px-10"
          />
        }
      >
        Completed documents can be exported as Text documents or for subtitle usage as WebVTT or
        SRT.
      </Block>
      <Block
        heading="100% Open Source"
        image={
          <a target="_blank" href="https://github.com/bugbakery/transcribee">
            <Image
              src={
                'https://opengraph.githubassets.com/9f54235fd4245bd96dc4a7a1943458471f4bcb1e36fff3c7ced9ddfad8977bf2/bugbakery/transcribee'
              }
              width={1200}
              height={600}
              alt={'An image of the transcribee popup showing the automatic transcription status'}
              className="rounded-md w-[530px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
            />
          </a>
        }
        imageOnRight={true}
      >
        transcribee is open source and licensed under the AGPL-3.0 license. You can inspect the
        code, contribute to it and host your own instance.{' '}
      </Block>
    </Page>
  );
}

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center my-6 lg:my-36 md:my-12 lg:mx-4">
      <div className="text-center lg:text-left items-center lg:items-start flex flex-col mb-1">
        <h1 className="text-[calc(min(50px,10vw_+_3px))] lg:text-[calc(min(60px,3.8vw_+_12px))] font-semibold mb-6 leading-tight">
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
      <div className="flex items-center flex-grow w-full max-w-[800px]">
        <Image
          src={AppPreviewSrc}
          alt="Overview of the transcribee application"
          className="rounded-md w-full aspect-[3/2] border border-1 border-gray-300 shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
}

function Block({
  children,
  heading,
  image,
  imageOnRight = false,
}: {
  children: ReactNode;
  heading: ReactNode;
  image: ReactNode;
  imageOnRight?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 items-center my-6 sm:my-36 justify-center mt-16">
      <div
        className={clsx(
          'text-center md:text-left items-center md:items-start flex flex-col flex-grow max-w-sm',
          !imageOnRight && 'md:order-last'
        )}
      >
        <h2 className="text-4xl font-semibold mb-6 leading-tight px-8 md:px-0">{heading}</h2>
        <p className="text-lg leading-6 mb-6">{children}</p>
      </div>
      <div className={clsx('flex items-center px-4')}>{image}</div>
    </div>
  );
}
