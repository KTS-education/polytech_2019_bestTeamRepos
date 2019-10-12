import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";
import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";

import Logo from "@img/friends.png";

import "./FriendList.css";

class FriendList extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    LogoPath: Logo
  };

  render() {
    const { LogoPath } = this.props;

    return (
      <div className="FriendList-Container">
        <Header />
        <PageName name="Мои друзья" logoPath={LogoPath} />
        <SearchInput />
      </div>
    );
  }
}

export default FriendList;
