import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";

const App = props => {
  return (
    <div className={styles["app"]}>
      <Header />
      <Switch>
        <Route exact path={Routes.mainPage} component={Main} />
        <Route path={Routes.friendListPage} component={FriendList} />
        <Route path={Routes.profile.path} render={props => <Profile />} />
      </Switch>
    </div>
  );
};

export default App;
