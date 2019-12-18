import React from "react";
import { Route, Switch } from "react-router-dom";

import Routes from "@config/routes.js";

import YourAccount from "./YourAccount";
import Friends from "./Friends";
import LinkItem from "@components/LinkItem";

import styles from "./Header.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles["header-container"]}>
        <Switch>
          <Route
            exact
            path={Routes.mainPage}
            render={props => <YourAccount />}
          />
          <Route
            exact
            path={Routes.friendListPage}
            render={props => <YourAccount />}
          />
          <Route
            path={Routes.profile.path}
            render={props => (
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
            )}
          />
        </Switch>

        <Switch>
          <Route exact path={Routes.mainPage} render={props => <Friends />} />
          <Route path={Routes.profile.path} render={props => <Friends />} />
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
