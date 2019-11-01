import React, { Component } from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import Badge from "../Badge";
import giftIcon from "@img/iconGift.png";
import styles from "../StatusButtons.module.scss";

export default class StatusButtonsMyPage extends Component {
  static propTypes = {
    isBooked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isBooked: null,
    className: null
  };

  render() {
    const { isBooked } = this.props;

    const isBookedBadge = isBooked ? (
      <Badge
        className={styles["booked"]}
        src={giftIcon}
        children="Кто-то хочет тебе это подарить"
      />
    ) : null;

    return (
      <div className={styles["item__group"]}>
        <MainButton
          type="secondary"
          className={styles["button--delete"]}
          children="Удалить"
        />{" "}
        {isBookedBadge}
      </div>
    );
  }
}
