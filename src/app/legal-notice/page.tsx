import React from 'react';
import { Metadata } from 'next';
import { Page } from '../../components/Page';
import { MailLink } from '../contact/mail';
// import { TelNo } from './telno';

export const metadata: Metadata = {
  title: 'Legal Notice',
  openGraph: {
    title: 'Legal Notice',
  },
};

export default function ContactPage() {
  return (
    <Page className="max-w-[600px]">
      <h1 className="text-center text-3xl font-semibold mt-12 mb-10">Legal Notice</h1>

      <p className="mb-4">Responsible for the content:</p>
      <p className="mb-4">
        Engelhardt, Habiger, Heinemann & Mandler GbR
        <br />
        c/o Engelhardt
        <br />
        Singerstr. 109
        <br />
        10179 Berlin
      </p>

      <h3 className="font-semibold">Contact</h3>
      <p className="mb-4">
        Email: <MailLink />
        <br />
        {/* Tel: <TelNo /> */}
      </p>
    </Page>
  );
}
