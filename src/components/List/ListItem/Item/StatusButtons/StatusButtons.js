import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import MainButton from "@components/MainButton";
import Badge from "./Badge";
import giftIcon from "@img/iconGift.png";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import "./StatusButtons.css";

class StatusButtons extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      product_description: PropTypes.string.isRequired,
      product_img_href: PropTypes.string.isRequired,
      product_price: PropTypes.number.isRequired,
      product_title: PropTypes.string.isRequired,
      product_isBooked: PropTypes.bool,
      selectedPerson: PropTypes.string,
      selectedPerson_photo_href: PropTypes.string
    }),
    className: PropTypes.string
  };

  static defaultProps = {
    className: null,
    product_isBooked: null,
    selectedPerson: null,
    selectedPerson_photo_href: null
  };

  getUserId = () => {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  }

  render() {
    const product = this.props.product;
    if (this.props.location.pathname === "/") {
      return (
        <MainButton
          className="item__button"
          children="Добавить в избранное"
        />
      );
    } else if (this.props.location.pathname === "/mypage") {
      if (
        product.hasOwnProperty("product_isBooked") &&
        product.product_isBooked
      ) {
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
        );
      } else {
        return (
          <MainButton
            type="secondary"
            className="button--delete"
            children="Удалить"
          />
        );
      }
    } else if (this.props.location.pathname === "/mypage/what-i-want") {
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
            src={product.selectedPerson_photo_href}
            children="Это подарок для друга"
          />
        </div>
      );
    } else if (this.props.location.pathname === "/myfriendspage/from-me") {
      if (product.product_isBooked) {
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
      } else {
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
    }
  }
}

export default withRouter(StatusButtons);
