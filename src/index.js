import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./app/store";
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>

    </Provider>
  </React.StrictMode>
  ,
  document.getElementById("root")
);
