import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";

import { connect } from "react-redux";
import { apiGetItems } from "@actions/getSearchResults";
import { updateWishlist } from "@actions/updateGiftsList";
import { getSearchSuggestions } from "@actions/getSearchSuggestions";
import PopularGiftsContainer from "@components/PopularGiftsContainer";

import Logo from "@img/wishlist.png";

import styles from "./Main.module.scss";

class Main extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    logoPath: Logo
  };

  async componentDidMount() {
    try {
      await this.props.updateWishlist(this.props.userId.api_id);
    } catch (e) {
      console.error(e);
    }
  }

  getSearchSuggestions = async input => {
    await this.props.getSearchSuggestions(input);
  };

  render() {
    const { logoPath, apiGetItems } = this.props;
    const { giftsList } = this.props.giftsList;

    return (
      <div className={styles["main-container"]}>
        <PageName name="Wishlist" logoPath={logoPath} />
        <SearchInput
          children="Введите название товара"
          apiGetItems={apiGetItems}
          giftsList={giftsList}
          onChange={this.getSearchSuggestions}
        />
        <PopularGiftsContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ userId, giftsList }) => {
  return {
    ...userId,
    giftsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    apiGetItems: (query, giftsList) => dispatch(apiGetItems(query, giftsList)),
    updateWishlist: id => dispatch(updateWishlist(id)),
    getSearchSuggestions: input => dispatch(getSearchSuggestions(input))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
