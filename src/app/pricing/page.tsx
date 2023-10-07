import { Metadata } from 'next';
import { Page } from '../../components/Page';

export const metadata: Metadata = {
  title: 'Pricing',
  openGraph: {
    title: 'Pricing'
  }
}

export default function PricingPage() {
  return (
    <Page>
      <h1>Pricing</h1>
    </Page>
  );
}
