import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import Main from "./Main";
import MyPage from "./MyPage";
import FriendPage from "./FriendPage";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";
const App = () => {
  return (
    <div className={styles["app"]}>
      <Route path={Routes.MainPage} component={Header} />
      <Switch>
        <Route exact path={Routes.MainPage} component={Main} />
        <Route path={Routes.FriendListPage} component={FriendList} />
        <Route path={Routes.MyPage} component={MyPage} />
        <Route path={Routes.FriendPage} component={FriendPage} />
      </Switch>
    </div>
  );
};

export default App;
