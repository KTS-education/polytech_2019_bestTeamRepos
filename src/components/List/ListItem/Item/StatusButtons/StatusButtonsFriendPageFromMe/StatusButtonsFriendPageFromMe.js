import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import { connect } from "react-redux";
// import { bookProduct, unbookProduct } from "@actions/booking";
// import {
//   addToListFromMe,
//   removeFromListFromMe
// } from "@actions/updateGiftsList";
import pensiveFace from "@img/pensiveFace.png";
import popular from "@img/badge-popular.png";
import styles from "../StatusButtons.module.scss";

class StatusButtonsFriendPageFromMe extends Component {
  static propTypes = {
    // isBooked: PropTypes.bool,
    // isBookedByCurrentUser: PropTypes.bool,
    isFavouriteByCurrentUser: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    // isBooked: null,
    // isBookedByCurrentUser: null,
    isFavouriteByCurrentUser: null,
    className: null
  };

  // unBookClick = async () => {
  //   // this.setState({
  //   //   isBooked: false,
  //   //   isBookedByCurrentUser: false
  //   // });
  //   await this.props.unbookProduct(this.props.productId, this.props.userId);
  //   this.props.removeFromListFromMe({
  //     productId: this.props.productId,
  //     userId: this.props.userId
  //   });
  // };

  render() {
    const {
      // isBooked,
      // isBookedByCurrentUser,
      isFavouriteByCurrentUser
    } = this.props;
    console.log(this.props);

    const favouriteBadge = isFavouriteByCurrentUser ? (
      <Badge
        className={styles["booked"]}
        src={popular}
        children="Я тоже хочу!"
      />
    ) : null;

    // if (isBooked && isBookedByCurrentUser) {
    return (
      <div className={styles["status__group"]}>
        <Button
          // onClick={this.unBookClick}
          type="secondary"
          children={
            <span className={styles["button--status__content"]}>
              Не подарю
              <img src={pensiveFace} className={styles["emoji"]} alt="emoji" />
            </span>
          }
        />
        {favouriteBadge}
      </div>
    );
    // }
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     bookProduct: (productId, userId) =>
//       dispatch(bookProduct(productId, userId)),
//     unbookProduct: (productId, userId) =>
//       dispatch(unbookProduct(productId, userId)),
//     addToListFromMe: data => dispatch(addToListFromMe(data)),
//     removeFromListFromMe: data => dispatch(removeFromListFromMe(data))
//   };
// };

export default connect(null, null)(StatusButtonsFriendPageFromMe);
