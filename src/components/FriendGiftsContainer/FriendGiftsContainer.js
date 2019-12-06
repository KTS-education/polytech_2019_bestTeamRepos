import React, { Component } from "react";
import PropTypes from "prop-types";
import NoResults from "@components/NoResults";
import Loader from "@components/Loader";
import List from "@components/List";

import { connect } from "react-redux";
import { updateWishlist, getFriendWishlist } from "@actions/updateGiftsList";

class FriendGiftsContainer extends Component {
  static propTypes = {
    targetId: PropTypes.number.isRequired,
    userId: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { userId, targetId } = this.props;
    if (userId.vk_id === targetId) {
      this.props.updateWishlist(targetId);
    } else this.props.getFriendWishlist(targetId);
  }

  render() {
    const { giftsList, isLoading, error, userId, targetId } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (giftsList.length) {
        return <List products={giftsList} />;
      } else {
        if (userId.vk_id !== targetId) {
          return <NoResults>Кажется, друг не любит подарки</NoResults>;
        } else
          return <NoResults>Кажется, ты не любишь дарить подарки</NoResults>;
      }
    }
  }
}

const mapStateToProps = ({ giftsList }) => {
  return {
    ...giftsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWishlist: id => dispatch(updateWishlist(id)),
    getFriendWishlist: id => dispatch(getFriendWishlist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendGiftsContainer);
