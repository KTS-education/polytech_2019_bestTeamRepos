import React from "react";
import PropTypes from "prop-types";

import PageName from "@components/PageName";
import SearchInput from "@components/SearchInput";
import FriendsContainer from "@components/FriendsContainer";

import { connect } from "react-redux";

import Logo from "@img/friends.png";

import styles from "./FriendList.module.scss";

class FriendList extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    LogoPath: Logo
  };

  state = {
    filteredFriendList: []
  };

  onChangeInput = input => {
    let filteredFriendList = this.props.friendsList.filter(
      friend =>
        friend.first_name.toLowerCase().startsWith(input) ||
        friend.last_name.toLowerCase().startsWith(input)
    );
    this.setState({ filteredFriendList: filteredFriendList });
  };

  render() {
    const { LogoPath } = this.props;

    return (
      <div className={styles["friend-list-container"]}>
        <PageName name="Мои друзья" logoPath={LogoPath} />
        <SearchInput
          children="Введите имя друга"
          onChange={this.onChangeInput}
        />
        <FriendsContainer filteredFriendList={this.state.filteredFriendList} />
      </div>
    );
  }
}

const mapStateToProps = ({ friendsList }) => {
  return {
    ...friendsList
  };
};

export default connect(mapStateToProps)(FriendList);
