import React from "react";
// import PropTypes from 'prop-types';

import YourAccount from "./YourAccount";
import Friends from "./Friends";

import "./Header.css";

class Header extends React.Component {
  static propTypes = {};

  static defaultProps = {};

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
