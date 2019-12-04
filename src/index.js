import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import { BrowserRouter } from "react-router-dom";
import { store } from "@store/configureStore";
import { Provider } from "react-redux";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

connect.send("VKWebAppInit", {});

if (connect.supports("VKWebAppResizeWindow")) {
  connect.send("VKWebAppResizeWindow", { width: 800, height: 800 });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
