import React from "react";
import ReactDOM from "react-dom";
import App from "./container/Home";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import "./index.css";

const stores = configureStore();

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
