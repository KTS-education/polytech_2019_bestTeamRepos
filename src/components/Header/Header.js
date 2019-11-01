import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import LinkItem from "@components/LinkItem";

import AccountInfo from "@data/YourAccountInfo/mock.js";

import styles from "./Header.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Routes.mainPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount AccountInfo={AccountInfo} />
              <Friends />
            </div>
          )}
        />

        <Route
          path={Routes.friendListPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount AccountInfo={AccountInfo} />
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
            </div>
          )}
        />

        <Route
          path={Routes.profile.path}
          render={props => (
            <div className={styles["header-container"]}>
              <LinkItem href={Routes.mainPage}>Вернуться к поиску</LinkItem>
              <Friends />
            </div>
          )}
        />
      </Switch>
    );
  }
}
