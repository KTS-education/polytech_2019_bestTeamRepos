import React, { Component } from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import Badge from "../Badge";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import wantGive from "@img/wantGive.png";
import ok from "@img/ok.png";
import styles from "../StatusButtons.module.scss";
import currentStyles from "./StatusButtonsFriendPage.module.scss";

export default class StatusButtonsFriendPage extends Component {

    static propTypes = {
        isBooked: PropTypes.bool.isRequired,
        isBookedByCurrentUser: PropTypes.bool,
        isFavouriteByCurrentUser: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        isBookedByCurrentUser: null,
        isFavouriteByCurrentUser: null,
        className: null
    };

    render() {
        const { isBooked, isBookedByCurrentUser, isFavouriteByCurrentUser } = this.props;

        const favouriteBadge = isFavouriteByCurrentUser ? <Badge
            className={styles["booked"]}
            src={popular}
            children="Я тоже хочу!"
        /> : null;

        if (isBooked && isBookedByCurrentUser) {
            return (
                <div className={styles["item__group"]}>
                    <MainButton
                        type="secondary"
                        className={styles["button--delete"]}
                        children={
                            <span className={styles["button--delete__content"]}>
                                Не подарю
                            <img src={pensiveFace} className={styles["emoji"]} alt="emoji" />
                            </span>
                        }
                    />
                    {favouriteBadge}
                </div>
            );
        }
        else if (!isBooked) {
            return (
                <div className={styles["item__group"]}>
                    <MainButton
                        className={styles["button--delete"]}
                        children={
                            <span className={styles["button--delete__content"]}>
                                Подарю
                            <img src={wantGive} className={styles["emoji"]} alt="emoji" />
                            </span>
                        }
                    />
                    {favouriteBadge}
                </div>
            );
        }
        else if (isBooked && !isBookedByCurrentUser) {
            return (
                <div className={styles["item__group"]}>
                    <MainButton
                        type="disabled"
                        className={styles["button--delete"]}
                        children={
                            <span className={styles["button--delete__content"]}>
                                Уже подарят
                            <img src={ok} className={styles["emoji"]} alt="emoji" />
                            </span>
                        }
                    />
                    {favouriteBadge}
                </div>
            );
        }
    }
}
