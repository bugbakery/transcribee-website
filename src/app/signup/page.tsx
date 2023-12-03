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
      <h2 className="text-center text-5xl font-semibold my-4">We are currently in closed Beta phase!</h2>

      <p className='pb-4 pt-10'>
        Transcribee is not fully ready for the public yet. That means that some features might be
        missing, not fully implemented or less polished than we would want them to be.
      </p>

      <p className='pb-4'>
        If you nontheless want to try transcribee now, you can <Link href="/contact" className='underline'>Contact Us</Link>.
      </p>
    </Page>
  );
}

