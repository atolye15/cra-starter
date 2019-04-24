import { hot } from 'react-hot-loader/root';
import React, { FunctionComponent, Fragment } from 'react';

import Routes from './routes';

const App: FunctionComponent = () => (
  <Fragment>
    <header>Header</header>
    <Routes />
    <footer>Footer</footer>
  </Fragment>
);

export default hot(App);
