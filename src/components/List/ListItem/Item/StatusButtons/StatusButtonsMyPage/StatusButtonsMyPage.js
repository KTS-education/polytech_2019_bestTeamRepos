import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import giftIcon from "@img/iconGift.png";
import styles from "../StatusButtons.module.scss";
import { connect } from "react-redux";
import { deleteFromMyList } from "@actions/updateGiftsList";

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

  handleClick = () => {
    this.props.deleteFromMyList(this.props.id);
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
        <Button type="secondary" onClick={this.handleClick}>
          Удалить
        </Button>{" "}
        {isBookedBadge}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFromMyList: id => dispatch(deleteFromMyList(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StatusButtonsMyPage);
