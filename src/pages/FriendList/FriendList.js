import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";
import PageName from "@components/PageName";
import SearchInput from "@components/SearchInput";
import FriendsListContainer from "@components/FriendsListContainer";

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
      <div className="friendList-Container">
        <Header />
        <PageName name="Мои друзья" logoPath={LogoPath} />
        <SearchInput />
        <FriendsListContainer />
      </div>
    );
  }
}

export default FriendList;
