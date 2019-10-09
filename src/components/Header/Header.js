import React from "react";

import YourAccount from "./YourAccount";
import Friends from "./Friends";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="HeaderContainer">
        <YourAccount name="Антон" surname="Чащин" />
        <Friends />
      </div>
    );
  }
}

export default Header;
