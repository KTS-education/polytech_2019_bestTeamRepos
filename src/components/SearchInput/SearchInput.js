import React from "react";

import styles from "./SearchInput.module.scss";

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className={styles["search"]}>
        <input
          type="text"
          className={(styles["search"], styles["search__input-line"])}
          placeholder="Введите название товара"
        />
      </div>
    );
  }
}
