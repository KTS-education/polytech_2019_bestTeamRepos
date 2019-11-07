import React from "react";
import PropTypes from "prop-types";

import YourAccount from "./YourAccount";
import Friends from "./Friends";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import LinkItem from "@components/LinkItem";

import styles from "./Header.module.scss";

export default class Header extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    friends: PropTypes.object.isRequired
  };

  render() {
    const { profile, friends } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={Routes.mainPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount profile={profile} />
              <Friends friends={friends} />
            </div>
          )}
        />

        <Route
          path={Routes.friendListPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount profile={profile} />
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
            </div>
          )}
        />

        <Route
          path={Routes.profile.path}
          render={props => (
            <div className={styles["header-container"]}>
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
              <Friends friends={friends} />
            </div>
          )}
        />
      </Switch>
    );
  }
}
