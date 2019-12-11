import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import PopularGiftsContainer from "@components/PopularGiftsContainer";
import SearchSuggestions from "@components/SearchSuggestions";

import { connect } from "react-redux";
import { apiGetItems } from "@actions/getSearchResults";
import { updateWishlist } from "@actions/updateGiftsList";
import { getSearchSuggestions } from "@actions/getSearchSuggestions";

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
    const { logoPath, searchSuggestions, apiGetItems } = this.props;
    const { giftsList } = this.props.giftsList;
    const { pages } = searchSuggestions;

    return (
      <div className={styles["main-container"]}>
        <PageName name="Wishlist" logoPath={logoPath} />
        <SearchInput
          children="Введите название товара"
          handleInput={apiGetItems}
          giftsList={giftsList}
          onChange={this.getSearchSuggestions}
        />
        {pages ? <SearchSuggestions searchSuggestions={pages} /> : null}
        <PopularGiftsContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ userId, giftsList, searchSuggestions }) => {
  return {
    ...userId,
    giftsList,
    ...searchSuggestions
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
