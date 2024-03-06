import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import { App } from './App.tsx';
import './styles/index.scss';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate persistor={persistor}>*/}
      {/*  <App />*/}
      {/*</PersistGate>*/}
      {/*TODO: Добавить персист*/}
      <App />
    </Provider>
  </React.StrictMode>,
);
