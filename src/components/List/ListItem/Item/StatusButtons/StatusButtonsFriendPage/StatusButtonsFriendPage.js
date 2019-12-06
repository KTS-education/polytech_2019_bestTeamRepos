import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import wantGive from "@img/wantGive.png";
import ok from "@img/ok.png";
import styles from "../StatusButtons.module.scss";

export default class StatusButtonsFriendPage extends Component {
  static propTypes = {
    isBooked: PropTypes.bool,
    isBookedByCurrentUser: PropTypes.bool,
    isFavouriteByCurrentUser: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isBooked: null,
    isBookedByCurrentUser: null,
    isFavouriteByCurrentUser: null,
    className: null
  };

  render() {
    const {
      isBooked,
      isBookedByCurrentUser,
      isFavouriteByCurrentUser
    } = this.props;

    const favouriteBadge = isFavouriteByCurrentUser ? (
      <Badge
        className={styles["booked"]}
        src={popular}
        children="Я тоже хочу!"
      />
    ) : null;

    if (isBooked && isBookedByCurrentUser) {
      return (
        <div className={styles["status__group"]}>
          <Button
            type="secondary"
            children={
              <span className={styles["button--status__content"]}>
                Не подарю
                <img
                  src={pensiveFace}
                  className={styles["emoji"]}
                  alt="emoji"
                />
              </span>
            }
          />
          {favouriteBadge}
        </div>
      );
    } else if (!isBooked) {
      return (
        <div className={styles["status__group"]}>
          <Button
            children={
              <span className={styles["button--status__content"]}>
                Подарю
                <img src={wantGive} className={styles["emoji"]} alt="emoji" />
              </span>
            }
          />
          {favouriteBadge}
        </div>
      );
    } else if (isBooked && !isBookedByCurrentUser) {
      return (
        <div className={styles["status__group"]}>
          <Button
            type="disabled"
            children={
              <span className={styles["button--status__content"]}>
                Уже подарят
                <img src={ok} className={styles["emoji"]} alt="emoji" />
              </span>
            }
          />
          {favouriteBadge}
        </div>
      );
    }
    return null;
  }
}
