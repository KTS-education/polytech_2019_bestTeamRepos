import React from "react";
import PropTypes from "prop-types";

import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import PopularGiftsContainer from "@components/PopularGiftsContainer";

import Logo from "@img/wishlist.png";

import "./Main.css";

class Main extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    logoPath: Logo
  };

  render() {
    const { logoPath } = this.props;

    return (
      <div className="main-container">
        <PageName name="Wishlist" logoPath={logoPath} />
        <SearchInput />
        <PopularGiftsContainer />
      </div>
    );
  }
}

export default Main;
