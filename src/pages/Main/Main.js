import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";
import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";

import Logo from "@img/wishlist.png";

import "./Main.css";

class Main extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    LogoPath: Logo
  };

  render() {
    const { LogoPath } = this.props;

    return (
      <div className="Main-container">
        <Header />
        <PageName Name="Wishlist" LogoPath={LogoPath} />
        <SearchInput />
      </div>
    );
  }
}

export default Main;
