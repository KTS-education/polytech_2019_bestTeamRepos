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
      <div className={styles["header-container"]}>
        <Switch>
          <Route
            exact
            path={Routes.mainPage}
            render={props => <YourAccount profile={profile} />}
          />
          <Route
            exact
            path={Routes.friendListPage}
            render={props => <YourAccount profile={profile} />}
          />
          <Route
            exact
            path={Routes.profile.path}
            render={props => (
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path={Routes.mainPage}
            render={props => <Friends friends={friends} />}
          />
          <Route
            exact
            path={Routes.profile.path}
            render={props => <Friends friends={friends} />}
          />
          <Route
            exact
            path={Routes.friendListPage}
            render={props => (
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
            )}
          />
        </Switch>
      </div>
    );
  }
}
