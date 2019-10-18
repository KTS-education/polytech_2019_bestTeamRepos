import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";

import LinkItem from "@components/LinkItem";

import AccountInfo from "./YourAccountInfo/mock.js";

import "./Header.css";

class Header extends React.Component {
  render() {
    if (this.props.location.pathname === "/")
      return (
        <div className="header-container">
          <YourAccount AccountInfoObject={AccountInfo} />
          <Friends />
        </div>
      );
    else if (this.props.location.pathname.includes("/friends"))
      return (
        <div className="header-container">
          <YourAccount AccountInfoObject={AccountInfo} />
          <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
        </div>
      );
    else if (this.props.location.pathname.includes("/mypage"))
      return (
        <div className="header-container">
          <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
          <Friends />
        </div>
      );
    else if (this.props.location.pathname.includes("/myfriendspage"))
      return (
        <div className="header-container">
          <YourAccount AccountInfoObject={AccountInfo} />
          <LinkItem href="/" children={<span>Вернуться к поиску</span>} />
          <Friends />
        </div>
      );
  }
}

export default Header;
