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
      <div className="flex my-16 flex-wrap gap-6 lg:gap-0 max-w-[500px] lg:max-w-none mx-auto lg:mx-none">
        <PricingCard title="Educational" buttonText="Request Discount" buttonUrl="/todo">
          <Price price={1} />
          <ListP>students and teachers only</ListP>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <ListP>3 hours free each month</ListP>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <ListP>$0.5/hour for lower quality transcripts</ListP>
        </PricingCard>
        <PricingCard
          title="Regular"
          buttonText="Get Started"
          buttonUrl="/signup"
          className="lg:relative lg:-mx-5 lg:-my-3 lg:z-10 lg:h-[480px] -order-1 lg:order-none"
        >
          <Price price={5} />
          <ListP>commercial use</ListP>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <ListP>3 hours free each month</ListP>
          <hr className="h-px w-full my-1 bg-gray-200" />
          <ListP>$2.5/hour for lower quality transcripts</ListP>
        </PricingCard>
        <PricingCard
          title="Universities or Enterprises"
          buttonText="Contact Us"
          buttonUrl="/contact"
        >
          <div className="flex-grow-[3]" />

          <div>
            <ListP>You want a custom instance for your university or enterprise?</ListP>
            <hr className="h-px w-full my-1 bg-gray-200" />
            <ListP>You have special needs? </ListP>
            <hr className="h-px w-full my-1 bg-gray-200" />
            <ListP>You need custom features?</ListP>
          </div>
        </PricingCard>
      </div>

      <div className="flex my-16 gap-4 flex-wrap max-w-[500px] lg:max-w-none lg:max-w-none mx-auto lg:mx-none">
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[400px]">
          <h3 className="text-2xl font-medium">Host it yourself</h3>
          <p>
            transcribee is 100% open source software. You can setup your own instance.{' '}
            <b>No license costs apply.</b>
          </p>
        </div>
        <div className="rounded-md bg-neutral-100 p-10 basis-0 flex-grow min-w-[300px]">
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

function ListP({ children }: { children: ReactNode }) {
  return <p className="text-center">{children}</p>;
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
        'border border-neutral-300 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-md border-solid',
        'flex-grow basis-0 h-[460px] flex flex-col p-14 items-center',
        'min-w-full lg:min-w-[340px]',
        'bg-white',
        className,
      )}
    >
      <h3 className="text-center text-neutral-500 font-medium py-5">{title}</h3>
      {children}
      <div className="flex-grow" />
      <Link
        href={buttonUrl}
        className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md"
      >
        {buttonText}
      </Link>
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
