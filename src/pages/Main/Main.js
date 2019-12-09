import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import PopularGiftsContainer from "@components/PopularGiftsContainer";

import { connect } from "react-redux";
import { apiGetItems } from "@actions/getSearchResults";
import { updateWishlist } from "@actions/updateGiftsList";

import Logo from "@img/wishlist.png";

import styles from "./Main.module.scss";

import { api } from "@src/api.js";

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
    const response = await api("/api/products/suggest", "GET", {
      query: input
    });
    if (response) {
      const { completions, input, pages } = response.response.suggestions;
      console.log("completions", completions, "input", input, "pages", pages);
    } else {
      console.log(response.response.error);
    }
  };

  //   response:
  // suggestions:
  // completions: Array(4)
  // 0: {completion: "omi", value: "xiaomi"}
  // 1: {completion: "omi mi", value: "xiaomi mi"}
  // 2: {completion: "omi roidmi", value: "xiaomi roidmi"}
  // 3: {completion: "men titosh", value: "xiamen titosh"}
  // length: 4
  // __proto__: Array(0)
  // input: {value: "xia"}
  // pages: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  render() {
    const { logoPath } = this.props;
    const { giftsList } = this.props.giftsList;
    return (
      <div className={styles["main-container"]}>
        <PageName name="Wishlist" logoPath={logoPath} />
        <SearchInput
          children="Введите название товара"
          handleInput={this.props.apiGetItems}
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
    updateWishlist: id => dispatch(updateWishlist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
