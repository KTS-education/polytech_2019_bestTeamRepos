import React from "react";
import PropTypes from "prop-types";

import Logo from "@img/logo.svg";

import styles from "./PageName.module.scss";

export default class PageName extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    logoPath: PropTypes.string
  };

  static defaultProps = {
    children: "default name",
    logoPath: Logo
  };

  render() {
    const { children, logoPath } = this.props;

    return (
      <div className={styles["page-name"]}>
        <h1 className={styles["page-name__name"]}>{children}</h1>
        <img src={logoPath} className={styles["page-name__logo"]} alt="logo" />
      </div>
    );
  }
}
