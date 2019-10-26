import React, { Component } from 'react';
import MainButton from '@components/MainButton';
import Badge from '../Badge';
import giftIcon from "@img/iconGift.png";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import styles from './GroupButtons.scss';

export default class GroupButtons extends Component {
    render() {
        const { isBooked, src, selectedPersonId, popularItem } = this.props;
        console.log(this.props);

        if (isBooked && !selectedPersonId) {
            return (
                <div className="item__group">
                    <MainButton
                        type="secondary"
                        className="button--delete"
                        children="Удалить"
                    />{" "}
                    <Badge
                        className="booked"
                        src={giftIcon}
                        children="Кто-то хочет тебе это подарить"
                    />
                </div>
            )
        }

        else if (!isBooked && !selectedPersonId && !src && !popularItem) {
            return (
                <MainButton
                    type="secondary"
                    className="button--delete"
                    children="Удалить"
                />
            )
        }

        else if (src) {
            return (
                <div className="item__group">
                    <MainButton
                        type="secondary"
                        className="button--delete"
                        children={
                            <span className="button--delete__content">
                                Не подарю
                                <img src={pensiveFace} className="emoji" alt="emoji" />
                            </span>
                        }
                    />
                    <Badge
                        src={src}
                        children="Это подарок для друга"
                    />
                </div>
            )
        }

        else if (isBooked && selectedPersonId) {
            return (
                <div className="item__group">
                    <MainButton
                        type="secondary"
                        className="button--delete"
                        children={
                            <span className="button--delete__content">
                                Не подарю
                      <img src={pensiveFace} className="emoji" alt="emoji" />
                            </span>
                        }
                    />
                    <Badge
                        className="booked"
                        src={popular}
                        children="Я тоже хочу!"
                    />
                </div>
            );
        }
        else if (!isBooked && selectedPersonId) {
            return (
                <MainButton
                    type="secondary"
                    className="button--delete"
                    children={
                        <span className="button--delete__content">
                            Не подарю
                            <img src={pensiveFace} className="emoji" alt="emoji" />
                        </span>
                    }
                />
            );
        }
        else if (popularItem) {
            return (
                <MainButton
                    className="item__button"
                    children="Добавить в избранное"
                />
            )
        }
    }
}
