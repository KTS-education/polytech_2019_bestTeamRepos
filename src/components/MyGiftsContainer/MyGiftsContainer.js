import React, { Component } from "react";
import PropTypes from "prop-types";
import NoResults from "@components/NoResults";
import Loader from "@components/Loader";
import { api } from "@src/api.js";
import { connect } from "react-redux";
import {
  fetchGiftsBegin,
  fetchGiftsSuccess,
  fetchGiftsFailure
} from "@actions/getGiftsList";
import List from "@components/List";

class MyGiftsContainer extends Component {
  static propTypes = {
    giftsList: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    error: null,
    giftsList: [],
    isLoading: true
  };

  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  getMyWishlist(user_id) {
    return async dispatch => {
      try {
        dispatch(fetchGiftsBegin());
        const result = await api(`/api/wishlist/get`, "GET", {
          id: user_id
        });
        dispatch(fetchGiftsSuccess(result.response.wishlist));
      } catch (error) {
        dispatch(fetchGiftsFailure(error));
      }
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(this.getMyWishlist(userId.api_id));
  }

  render() {
    const { giftsList, isLoading, error } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (giftsList.length) {
        return <List products={giftsList} />;
      } else return <NoResults>Кажется, ты не любишь подарки</NoResults>;
    }
  }
}

const mapStateToProps = ({ userId, giftsList, isLoading, error }) => {
  return {
    ...userId,
    ...giftsList,
    ...isLoading,
    ...error
  };
};

export default connect(mapStateToProps)(MyGiftsContainer);
