import React from "react";
import PropTypes from "prop-types";
import popularEmoji from "@img/popular.png";
import styles from "./SectionName.module.scss";

export default class SectionName extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <h2 className={styles["list-title"]}>
        {children}
        <img
          className={styles["emoji"]}
          src={popularEmoji}
          alt="emoji popular"
        />
      </h2>
    );
  }
}
