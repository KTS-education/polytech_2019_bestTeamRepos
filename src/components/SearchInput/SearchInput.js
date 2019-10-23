import React from "react";

import styles from "./SearchInput.module.scss";

class SearchInput extends React.Component {
  render() {
    return (
      <div className={styles["search"]}>
        <input type="text" className={styles["search__input-line"]}></input>
      </div>
    );
  }
}

export default SearchInput;
