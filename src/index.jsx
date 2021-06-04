/* src/index.js */
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import "regenerator-runtime";
import "core-js/stable";
import store from "./store";

import App from "./App.js";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
