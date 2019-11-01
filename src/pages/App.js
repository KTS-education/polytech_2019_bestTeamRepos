import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import Main from "./Main";
import Profile from "./Profile";

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
        <Route path={Routes.Profile.path} component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
