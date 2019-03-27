import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const Root: FunctionComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
