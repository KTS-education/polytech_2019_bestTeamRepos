import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";

import AccountInfo from "./YourAccountInfo/mock.js";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <YourAccount AccountInfoObject={AccountInfo} />
        <Friends />
      </div>
    );
  }
}

export default Header;
