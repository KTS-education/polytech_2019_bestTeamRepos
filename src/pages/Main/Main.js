import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import PopularGiftsContainer from "@components/PopularGiftsContainer";
import SearchSuggestions from "@components/SearchSuggestions";

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

  state = { input: "", searchSuggestions: [] };

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
    if (response.response) {
      const { completions, input, pages } = response.response.suggestions;
      this.setState({
        input: input,
        completions: completions,
        searchSuggestions: pages
      });
    } else {
      this.setState({ input: input, searchSuggestions: [] });
      return;
    }
  };

  render() {
    console.log(this.state);
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
        {this.state.searchSuggestions ? (
          <SearchSuggestions searchSuggestions={this.state.searchSuggestions} />
        ) : null}
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
