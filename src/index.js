import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import { BrowserRouter } from "react-router-dom";
import { store } from "@store/configureStore";
import { Provider } from "react-redux";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

// Подписывается на события, отправленные нативным клиентом
connect.subscribe(e => console.log(e));

// Отправляет событие нативному клиенту
connect.send("VKWebAppInit", {});

// Проверяет, поддерживается ли событие на текущей платформе.
if (connect.supports("VKWebAppGetFriends")) {
  connect.send("VKWebAppGetFriends", { width: 800, height: 1000 });
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
