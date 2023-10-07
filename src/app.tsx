import { Route, Router, Switch } from 'wouter';
import { Helmet } from 'react-helmet';

import { HomePage } from './pages/HomePage';
import { PageNotFoundPage } from './pages/PageNotFound';
import { trimTrailingSlash } from './utils/trim_trailing_slash';
import { PricingPage } from './pages/PricingPage';

export function App() {
  const routerBase = trimTrailingSlash(import.meta.env.BASE_URL);

  return (
    <Router base={routerBase}>
      <Helmet titleTemplate="%s | transcribee 🐝" defaultTitle="transcribee 🐝"></Helmet>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/pricing" component={PricingPage} />
        <Route component={PageNotFoundPage} />
      </Switch>
    </Router>
  );
}
