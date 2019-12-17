import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import { connect } from "react-redux";
import {
  bookProduct,
  unbookProduct,
  addToListFromMe,
  removeFromListFromMe
} from "@actions/booking";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import styles from "../StatusButtons.module.scss";

class StatusButtonsFromMe extends Component {
  static propTypes = {
    isFavouriteByCurrentUser: PropTypes.bool,
    isBooked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isFavouriteByCurrentUser: null,
    isBooked: null,
    className: null
  };

  state = {
    isFavouriteByCurrentUser: this.props.isFavouriteByCurrentUser,
    isBooked: this.props.isBooked
  };

  bookClick = async () => {
    this.setState({
      isBooked: true
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
      isBooked: false
    });
    await this.props.unbookProduct(
      this.props.productId,
      this.props.product.userId
    );
    this.props.removeFromListFromMe({
      productId: this.props.productId,
      userId: this.props.product.userId
    });
  };

  render() {
    const badge =
      this.props.userId === this.props.product.userId ? (
        this.state.isFavouriteByCurrentUser ? (
          <Badge
            className={styles["booked"]}
            src={popular}
            children="Я тоже хочу!"
          />
        ) : null
      ) : (
        <Badge
          src={this.props.product.photoUser}
          children="Это подарок для друга"
        />
      );

    return (
      <div className={styles["status__group"]}>
        <Button type="secondary" onClick={this.unBookClick}>
          <span className={styles["button--status__content"]}>
            Не подарю
            <img src={pensiveFace} className={styles["emoji"]} alt="emoji" />
          </span>
        </Button>
        {badge}
      </div>
    );
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
)(StatusButtonsFromMe);
