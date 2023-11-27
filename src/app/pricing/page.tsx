import React, { ComponentProps, ReactNode } from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import clsx from 'clsx';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  openGraph: {
    title: 'Pricing',
  },
};

export default function PricingPage() {
  return (
    <Page>
      <h1 className="text-center text-neutral-400 font-medium my-4">Pricing</h1>
      <h2 className="text-center text-5xl font-semibold my-4">Predictable and Fair</h2>
      <h3 className="text-center my-4">
        Simple, yet affordable pricing model. Completely usage based. No monthly fees. No surprises.
      </h3>
      <div className="flex my-16">
        <PricingCard title="Educational" buttonText="Request Discount" buttonUrl="/todo">
          <Price price={1} />
          <p>students and teachers only</p>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <p>3 hours free each month</p>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <p>$0.5/hour for lower quality transcripts</p>
        </PricingCard>
        <PricingCard
          title="Regular"
          buttonText="Get Started"
          buttonUrl="https://transcribee.net/signup"
          className="relative -mx-5 -my-3 z-10 h-[480px]"
        >
          <Price price={5} />
          <p>commercial use</p>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <p>3 hours free each month</p>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <p>$2.5/hour for lower quality transcripts</p>
        </PricingCard>
        <PricingCard
          title="Universities or Enterprises"
          buttonText="Contact Us"
          buttonUrl="/contact"
        >
          <div className="flex-grow" />

          <div>
            <p>You want a custom instance for your university or enterprise?</p>
            <hr className="h-px w-full my-1 bg-gray-200" />
            <p>You have special needs? </p>
            <hr className="h-px w-full my-1 bg-gray-200" />
            <p>You need custom features?</p>
          </div>
        </PricingCard>
      </div>

      <div className="flex my-16 gap-4">
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow">
          <h3 className="text-2xl font-medium">Host it yourself</h3>
          <p>
            transcribee is 100% open source software. You can setup your own instance.{' '}
            <b>No license costs apply.</b>
          </p>
        </div>
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow">
          <h3 className="text-2xl font-medium">Non-profits</h3>
          <p>
            You’re making the world a better place?{' '}
            <Link href="/contact" className="underline">
              Contact us
            </Link>
            , we’ll see how we can support you.
          </p>
        </div>
      </div>
    </Page>
  );
}

function PricingCard({
  children,
  title,
  buttonText,
  buttonUrl,
  className,
}: {
  children: ReactNode;
  title: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid flex-grow basis-0 h-[460px] flex flex-col p-14 items-center',
        'bg-white',
        className,
      )}
    >
      <h3 className="text-center text-neutral-500 font-medium py-5">{title}</h3>
      {children}
      <div className="flex-grow" />
      <a
        href={buttonUrl}
        className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
      >
        {buttonText}
      </a>
    </div>
  );
}

function Price({ price }: { price: number }) {
  return (
    <div className="text-center pb-12">
      <span className="text-2xl font-medium align-top">€</span>
      <span className="text-5xl font-bold">{price}</span>
      <span className="text-5xl font-light">/hour</span>
      <p className="text-neutral-500 font-medium">of transcribed audio</p>
    </div>
  );
}
