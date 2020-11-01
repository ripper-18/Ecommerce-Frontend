import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const app = (
  // <Provider store={store}>
      // <PersistGate Loading={null} persistor={persistor}>
      <BrowserRouter>
              <App />
      </BrowserRouter>
      // </PersistGate>
  // </Provider>
);

ReactDOM.render(app, document.getElementById("root"));


