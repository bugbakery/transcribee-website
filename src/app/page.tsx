import Image, { StaticImageData } from 'next/image';

import { Page } from '../components/Page';
import { ReactNode } from 'react';

import AppPreviewSrc from '../assets/app-preview.png';
import WorkerPopupSrc from '../assets/worker_popup.png';
import ExportSrc from '../assets/export.png';
import CorrectSrc from '../assets/correct.png';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <Block
        heading="State of the art automatic transcription."
        imageSrc={WorkerPopupSrc}
        imageAlt="An image of the transcribee popup showing the automatic transcription status"
      >
        transcribee uses the open source <i>Whisper</i> machine-learning (ML) model to create high
        quality automated transcriptions.
      </Block>
      <Block
        heading="Manual Refinement"
        imageSrc={CorrectSrc}
        imageAlt="An image of the transcribee popup showing the automatic transcription status"
        imageOnRight={true}
      >
        Automatic transcripts can easily be manually corrected. Words that are likely not correct
        are highlighted for speedy corrections.
      </Block>
      <Block
        heading="Export"
        imageSrc={ExportSrc}
        imageAlt="An image of the transcribee popup showing the automatic transcription status"
      >
        Completed documents can be exported as Text documents or for subtitle usage as WebVTT or
        SRT.
      </Block>
      <Block
        heading="100% Open Source"
        imageSrc={{
          src: 'https://opengraph.githubassets.com/9f54235fd4245bd96dc4a7a1943458471f4bcb1e36fff3c7ced9ddfad8977bf2/bugbakery/transcribee',
          width: 1200,
          height: 600,
        }}
        imageAlt=""
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
    <div className="flex flex-col md:flex-row gap-10 items-center my-6 sm:my-48">
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

function Block({
  children,
  heading,
  imageSrc,
  imageAlt,
  imageOnRight = false,
}: {
  children: ReactNode;
  heading: ReactNode;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageOnRight?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center my-6 sm:my-36">
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded-md w-[530px] shadow-[0px_1px_15px_rgba(0,0,0,0.1)]"
        />
      </div>
      <div
        className={clsx(
          'text-center md:text-left items-center md:items-start flex flex-col flex-grow',
          imageOnRight && 'md:order-first',
        )}
      >
        <h2 className="text-4xl font-semibold mb-6 leading-tight px-8 md:px-0">{heading}</h2>
        <p className="text-lg leading-6 mb-6 max-w-sm">{children}</p>
      </div>
    </div>
  );
}
