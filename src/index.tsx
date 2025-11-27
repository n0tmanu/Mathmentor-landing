import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MarketingPage from '../MarketingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MarketingPage />
  </React.StrictMode>
);
