import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import { BrowserRouter } from "react-router-dom";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
