import React from "react";

import LoaderImg from "@img/loader.png";

import styles from "./Loader.module.scss";

export default class Loader extends React.Component {
  render() {
    return (
      <img src={LoaderImg} alt="Loading..." className={styles["loader"]} />
    );
  }
}
