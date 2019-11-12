import React, { Component } from "react";
import Button from "@components/Button";
import styles from "./StatusButtonsPopular.module.scss";

export default class StatusButtonsPopular extends Component {
  render() {
    return (
      <Button
        className={styles["item__button"]}
        children="Добавить в избранное"
      />
    );
  }
}
