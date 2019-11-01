import React, { Component } from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
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

    if (src) {
      return (
        <div className={styles["item__group"]}>
          <MainButton
            type="secondary"
            className={styles["button--delete"]}
            children={
              <span className={styles["button--delete__content"]}>
                Не подарю
                <img
                  src={pensiveFace}
                  className={styles["emoji"]}
                  alt="emoji"
                />
              </span>
            }
          />
          <Badge src={src} children="Это подарок для друга" />
        </div>
      );
    }
  }
}