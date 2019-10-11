import React from "react";
import PropTypes from "prop-types";

import Logo from "@img/logo.svg";

import "./PageName.css";

class PageName extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    logoPath: PropTypes.string
  };

  static defaultProps = {
    name: "default name",
    logoPath: Logo
  };

  render() {
    const { name, logoPath } = this.props;

    return (
      <div className="PageName">
        <h1 className="PageName__Name">{name}</h1>
        <img src={logoPath} className="PageName__Logo" alt="logo" />
      </div>
    );
  }
}

export default PageName;
