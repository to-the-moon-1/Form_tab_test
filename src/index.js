import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
