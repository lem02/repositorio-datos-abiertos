import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SiteContextContainer from './Context/siteContext';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <SiteContextContainer>
      <App />
    </SiteContextContainer>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
