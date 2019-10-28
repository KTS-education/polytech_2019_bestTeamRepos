import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import LinkItem from "@components/LinkItem";

import AccountInfo from "@data/YourAccountInfo/mock.js";

import styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Routes.MainPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount AccountInfo={AccountInfo} />
              <Friends />
            </div>
          )}
        />

        <Route
          path={Routes.FriendListPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount AccountInfo={AccountInfo} />
              <LinkItem href="/">Вернуться к поиску</LinkItem>
            </div>
          )}
        />

        <Route
          path={Routes.MyPage}
          render={props => (
            <div className={styles["header-container"]}>
              <LinkItem href="/">Вернуться к поиску</LinkItem>
              <Friends />
            </div>
          )}
        />

        <Route
          path={Routes.FriendPage}
          render={props => (
            <div className={styles["header-container"]}>
              <YourAccount AccountInfo={AccountInfo} />
              <LinkItem href="/">Вернуться к поиску</LinkItem>
              <Friends />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default Header;
