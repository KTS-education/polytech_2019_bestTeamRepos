import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";

const App = props => {
  const { profile, friends } = props;
  return (
    <div className={styles["app"]}>
      <Route
        path={Routes.mainPage}
        render={props => <Header profile={profile} friends={friends} />}
      />
      <Switch>
        <Route exact path={Routes.mainPage} component={Main} />
        <Route path={Routes.friendListPage} component={FriendList} />
        <Route
          path={Routes.profile.path}
          render={props => <Profile profile={profile} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ profile, friends }) => {
  return {
    profile,
    friends
  };
};

export default connect(mapStateToProps)(App);
