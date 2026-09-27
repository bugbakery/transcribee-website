import React from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Closed Beta',
  openGraph: {
    title: 'Closed Beta',
  },
};

export default function SignupPage() {
  return (
    <Page className='max-w-[600px]'>
      <h1 className="text-center text-neutral-400 font-medium my-4">Sign In?</h1>
      <h2 className="text-center text-5xl font-semibold my-4">transcribee web <br /> is currently in closed Beta phase!</h2>

      <p className='pb-4 pt-10'>
        transcribee web is not fully ready for the public yet. That means that some features might be
        missing, are not fully implemented or less polished than we would want them to be.
      </p>

      <p className='pb-4'>
        If you nontheless want to try transcribee web, you can <Link href="/contact" className='underline'>Contact Us</Link> or host your own instance.
      </p>

      <p className='pb-4'>
        If you want to try transcribee right away, you can use the <Link href="/desktop" className='underline'>Desktop version</Link>.
      </p>
    </Page>
  );
}

