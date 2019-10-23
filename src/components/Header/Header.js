import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import LinkItem from "@components/LinkItem";

import AccountInfo from "@data/YourAccountInfo/mock.js";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Routes.MainPage}
          render={props => (
            <div className="header-container">
              <YourAccount AccountInfoObject={AccountInfo} />
              <Friends />
            </div>
          )}
        />

        <Route
          path={Routes.FriendListPage}
          render={props => (
            <div className="header-container">
              <YourAccount AccountInfoObject={AccountInfo} />
              <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
            </div>
          )}
        />

        <Route
          path={Routes.MyPage}
          render={props => (
            <div className="header-container">
              <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
              <Friends />
            </div>
          )}
        />

        <Route
          path={Routes.FriendPage}
          render={props => (
            <div className="header-container">
              <YourAccount AccountInfoObject={AccountInfo} />
              <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
              <Friends />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default Header;
