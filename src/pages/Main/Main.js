import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import PopularGiftsContainer from "@components/PopularGiftsContainer";

import Logo from "@img/wishlist.png";

import styles from "./Main.module.scss";

export default class Main extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    logoPath: Logo
  };

  render() {
    const { logoPath } = this.props;

    return (
      <div className={styles["main-container"]}>
        <PageName children="Wishlist" logoPath={logoPath} />
        <SearchInput />
        <PopularGiftsContainer />
      </div>
    );
  }
}
