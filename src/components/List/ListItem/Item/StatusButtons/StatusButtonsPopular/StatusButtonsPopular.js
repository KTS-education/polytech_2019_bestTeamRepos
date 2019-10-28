import React, { Component } from "react";
import MainButton from "@components/MainButton";
import styles from "./StatusButtonsPopular.module.scss";

export default class StatusButtonsPopular extends Component {
  render() {
    return (
      <MainButton
        className={styles["item__button"]}
        children="Добавить в избранное"
      />
    );
  }
}
