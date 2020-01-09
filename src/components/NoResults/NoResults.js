import React from "react";
import PropTypes from "prop-types";

import noResults from "@img/noResults.png";

import styles from "./NoResults.module.scss";

export default class NoResults extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles["no-results-container"]}>
        <img
          className={styles["no-results-container__emoji"]}
          src={noResults}
          alt="Sad emoji"
        />
        <p>{children}</p>
      </div>
    );
  }
}
