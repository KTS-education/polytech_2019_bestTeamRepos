import React from "react";
import LoaderImg from "@img/loader.png";

import styles from "./Loader.module.scss";

class Loader extends React.Component {
  render() {
    return (
      <div className={styles["load-сontainer"]}>
        <img
          src={LoaderImg}
          alt="Loading"
          className={styles["load-container__img"]}
        ></img>
      </div>
    );
  }
}

export default Loader;
