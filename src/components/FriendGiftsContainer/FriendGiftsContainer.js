import React, { Component } from "react";
import PropTypes from "prop-types";
import NoResults from "@components/NoResults";
import Loader from "@components/Loader";
import List from "@components/List";

import { connect } from "react-redux";
import { updateWishlist } from "@actions/updateGiftsList";

class FriendGiftsContainer extends Component {
  static propTypes = {
    targetId: PropTypes.number.isRequired,
    userId: PropTypes.object.isRequired
  };

  async componentDidMount() {
    const { targetId, userId } = this.props;
    await this.props.updateWishlist(targetId, true, userId.api_id);
  }

  render() {
    const { giftsList, isLoading, error, targetId } = this.props;
    if (error) {
      return <div>{error}</div>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (giftsList.length) {
      return <List products={giftsList} currentUserId={targetId} />;
    }
    return <NoResults>Кажется, друг не любит подарки</NoResults>;
  }
}

const mapStateToProps = ({ giftsList }) => {
  return {
    ...giftsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWishlist: (id, isFriend, userId) =>
      dispatch(updateWishlist(id, isFriend, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendGiftsContainer);
