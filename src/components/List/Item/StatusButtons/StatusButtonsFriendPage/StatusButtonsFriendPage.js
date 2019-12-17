import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import wantGive from "@img/wantGive.png";
import ok from "@img/ok.png";
import styles from "../StatusButtons.module.scss";

import { connect } from "react-redux";
import {
  bookProduct,
  unbookProduct,
  addToListFromMe,
  removeFromListFromMe
} from "@actions/booking";

class StatusButtonsFriendPage extends Component {
  static propTypes = {
    userId: PropTypes.number,
    productId: PropTypes.number,
    isBooked: PropTypes.bool,
    isBookedByCurrentUser: PropTypes.bool,
    isFavouriteByCurrentUser: PropTypes.bool,
    className: PropTypes.string,
    product: PropTypes.object
  };

  static defaultProps = {
    isBooked: null,
    isBookedByCurrentUser: null,
    isFavouriteByCurrentUser: null,
    className: null
  };

  state = {
    isBooked: this.props.isBooked,
    isBookedByCurrentUser: this.props.isBookedByCurrentUser,
    isFavouriteByCurrentUser: this.props.isFavouriteByCurrentUser
  };

  bookClick = async () => {
    this.setState({
      isBooked: true,
      isBookedByCurrentUser: true
    });
    await this.props.bookProduct(this.props.productId, this.props.userId);
    this.props.addToListFromMe({
      productId: this.props.productId,
      photo: this.props.product.photo,
      name: this.props.product.name,
      price: this.props.product.price,
      userId: this.props.userId,
      photoUser: this.props.profile.photo,
      booked_by: true
    });
  };

  unBookClick = async () => {
    this.setState({
      isBooked: false,
      isBookedByCurrentUser: false
    });
    await this.props.unbookProduct(this.props.productId, this.props.userId);
    this.props.removeFromListFromMe({
      productId: this.props.productId,
      userId: this.props.userId
    });
  };

  render() {
    const favouriteBadge = this.state.isFavouriteByCurrentUser ? (
      <Badge
        className={styles["booked"]}
        src={popular}
        children="Я тоже хочу!"
      />
    ) : null;

    if (!this.state.isBooked) {
      return (
        <div className={styles["status__group"]}>
          <Button onClick={this.bookClick}>
            <span className={styles["button--status__content"]}>
              Подарю
              <img src={wantGive} className={styles["emoji"]} alt="emoji" />
            </span>
          </Button>
          {favouriteBadge}
        </div>
      );
    }

    if (this.state.isBooked && this.state.isBookedByCurrentUser) {
      return (
        <div className={styles["status__group"]}>
          <Button type="secondary" onClick={this.unBookClick}>
            <span className={styles["button--status__content"]}>
              Не подарю
              <img src={pensiveFace} className={styles["emoji"]} alt="emoji" />
            </span>
          </Button>
          {favouriteBadge}
        </div>
      );
    }

    if (this.state.isBooked && !this.state.isBookedByCurrentUser) {
      return (
        <div className={styles["status__group"]}>
          <Button type="disabled">
            <span className={styles["button--status__content"]}>
              Уже подарят
              <img src={ok} className={styles["emoji"]} alt="emoji" />
            </span>
          </Button>
          {favouriteBadge}
        </div>
      );
    }
  }
}

const mapStateToProps = ({ profile }) => {
  return {
    ...profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookProduct: (productId, userId) =>
      dispatch(bookProduct(productId, userId)),
    unbookProduct: (productId, userId) =>
      dispatch(unbookProduct(productId, userId)),
    addToListFromMe: data => dispatch(addToListFromMe(data)),
    removeFromListFromMe: data => dispatch(removeFromListFromMe(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusButtonsFriendPage);
