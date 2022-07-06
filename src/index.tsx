import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider, teamsTheme } from '@fluentui/react-northstar'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Provider theme={teamsTheme}>
        <App />
      </Provider>
    </BrowserRouter>
);


