import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './assets/styles/global.scss';
import './assets/styles/global-responsive.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
