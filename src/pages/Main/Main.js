import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { apiGetItems } from "@actions/updateSearchResults";
import { updateWishlist } from "@actions/updateGiftsList";
import { updateSearchSuggestions } from "@actions/updateSearchSuggestions";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import SearchGiftsContainer from "@components/SearchGiftsContainer";

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

  updateSearchSuggestions = async input => {
    await this.props.updateSearchSuggestions(input);
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
          onChange={this.updateSearchSuggestions}
        />
        <SearchGiftsContainer />
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
    updateSearchSuggestions: input => dispatch(updateSearchSuggestions(input))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
