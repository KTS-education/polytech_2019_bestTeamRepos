import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import giftIcon from "@img/iconGift.png";
import styles from "../StatusButtons.module.scss";
import { connect } from "react-redux";
import { deleteItem } from "@actions/deleteItem";
import { api } from "@src/api.js";

class StatusButtonsMyPage extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isBooked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isBooked: null,
    className: null
  };

  deleteFromMyList = async () => {
    this.props.deleteItem(this.props.id);
    const result = await api(`/api/wishlist/delete`, "POST", {
      id: this.props.id
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
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
      <div className={styles["status__group"]}>
        <Button type="secondary" onClick={this.deleteFromMyList}>
          Удалить
        </Button>{" "}
        {isBookedBadge}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id))
  };
};

export default connect(null, mapDispatchToProps)(StatusButtonsMyPage);
