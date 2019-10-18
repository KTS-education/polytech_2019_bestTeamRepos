import React from "react";
import PropTypes from "prop-types";

import PageName from "@components/PageName";
import SearchInput from "@components/SearchInput";
import FriendsContainer from "@components/FriendsContainer";

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
      <div className="friend-list-container">
        <PageName name="Мои друзья" logoPath={LogoPath} />
        <SearchInput />
        <FriendsContainer />
      </div>
    );
  }
}

export default FriendList;
