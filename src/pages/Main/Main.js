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
