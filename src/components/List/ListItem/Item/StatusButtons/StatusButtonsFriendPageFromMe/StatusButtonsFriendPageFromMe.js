import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import styles from "../StatusButtons.module.scss";

export default class StatusButtonsFriendPageFromMe extends Component {
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
    }
  }
}
