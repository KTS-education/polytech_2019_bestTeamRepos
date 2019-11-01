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
      <Route path={Routes.mainPage} component={Header} />
      <Switch>
        <Route exact path={Routes.mainPage} component={Main} />
        <Route path={Routes.friendListPage} component={FriendList} />
        <Route path={Routes.profile.path} component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
