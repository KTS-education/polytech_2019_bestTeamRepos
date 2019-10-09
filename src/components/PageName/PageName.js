import React from "react";
import PropTypes from "prop-types";

import Logo from "@img/logo.svg";

import "./PageName.css";

class PageName extends React.Component {
  static propTypes = {
    Name: PropTypes.string,
    LogoPath: PropTypes.string
  };

  static defaultProps = {
    Name: "default name",
    LogoPath: Logo
  };

  render() {
    const { Name, LogoPath } = this.props;

    return (
      <div className="PageName">
        <h1 className="PageName__Name">{Name}</h1>
        <img src={LogoPath} className="PageName__Logo" alt="logo" />
      </div>
    );
  }
}

export default PageName;
