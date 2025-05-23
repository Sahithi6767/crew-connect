import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import { Provider } from 'react-redux';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import persistStore from 'redux-persist/es/persistStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor=persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
