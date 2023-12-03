import React from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import { MailLink } from './mail';

export const metadata: Metadata = {
  title: 'Contact Us',
  openGraph: {
    title: 'Contact Us',
  },
};

export default function ContactPage() {
  return (
    <Page className='max-w-[600px]'>
      <h1 className="text-center text-neutral-400 font-medium my-4">Have Questions?</h1>
      <h2 className="text-center text-5xl font-semibold my-4">Contact Us!</h2>

      <p className='pb-4 pt-10'>
        If you have any questions regarding transcribee, do not hesitate to contact us.
        Be it for Cooperations, custom Integrations, development of custom features, requests for
        discount or anything else you can come up with.
      </p>

      <p className='pb-4'>
        Just send us an email: <MailLink />
      </p>
    </Page>
  );
}

