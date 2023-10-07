import { Page } from '../components/Page';

export function PageNotFoundPage() {
  return (
    <Page>
      <div className="prose prose-lg text-center my-20 mx-auto">
        <h1>Page not found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </Page>
  );
}
