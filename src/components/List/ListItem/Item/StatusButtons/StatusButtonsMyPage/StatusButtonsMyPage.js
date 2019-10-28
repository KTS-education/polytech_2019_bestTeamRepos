import React, { Component } from 'react';
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import Badge from "../Badge";
import giftIcon from "@img/iconGift.png";
import styles from "../StatusButtons.module.scss";

export default class StatusButtonsMyPage extends Component {

    static propTypes = {
        isBooked: PropTypes.bool.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        className: null
    };

    render() {
        const { isBooked } = this.props;

        if (isBooked) {
            return (
                <div className={styles["item__group"]}>
                    <MainButton
                        type="secondary"
                        className={styles["button--delete"]}
                        children="Удалить"
                    />{" "}
                    <Badge
                        className={styles["booked"]}
                        src={giftIcon}
                        children="Кто-то хочет тебе это подарить"
                    />
                </div>
            )
        }
        else {
            return (
                <MainButton
                    type="secondary"
                    className={styles["button--delete"]}
                    children="Удалить"
                />
            )
        }
    }
}
