import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.module.scss";

export default class SearchInput extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  render() {
    const { children } = this.props;
    return (
      <form className={styles["search"]}>
        <input
          type="text"
          className={(styles["search"], styles["search__input-line"])}
          placeholder={children}
        />
      </form>
    );
  }
}
