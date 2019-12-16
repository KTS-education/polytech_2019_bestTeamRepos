import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import pensiveFace from "@img/pensiveFace.png";

import styles from "../StatusButtons.module.scss";

export default class StatusButtonsMyPageIwant extends Component {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    src: null,
    className: null
  };

  render() {
    const { src } = this.props;
    console.log(this.props);

    return (
      <div className={styles["status__group"]}>
        <Button
          type="secondary"
          children={
            <span className={styles["button--status__content"]}>
              Не подарю
              <img src={pensiveFace} className={styles["emoji"]} alt="emoji" />
            </span>
          }
        />
        <Badge src={src} children="Это подарок для друга" />
      </div>
    );
  }
}
