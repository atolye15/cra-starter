import React, { FunctionComponent, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './routes';

const App: FunctionComponent = () => (
  <Fragment>
    <header>Header</header>
    <Routes />
    <footer>Footer</footer>
  </Fragment>
);

export default hot(module)(App);
