import React from "react";

import FriendImgList from "./FriendImgList";

import { connect } from "react-redux";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import styles from "./Friends.module.scss";

class Friends extends React.Component {
  render() {
    const { headerFriendsList, isLoading } = this.props;
    if (isLoading)
      return (
        <div className={styles["header-friends-container"]}>
          <LinkItem href={Routes.friendListPage}>Мои друзья</LinkItem>
        </div>
      );
    else
      return (
        <div className={styles["header-friends-container"]}>
          <LinkItem href={Routes.friendListPage}>Мои друзья</LinkItem>
          <FriendImgList friendsImages={headerFriendsList} />
        </div>
      );
  }
}

const mapStateToProps = ({ headerFriendsList, isLoading }) => {
  return {
    ...headerFriendsList,
    ...isLoading
  };
};

export default connect(mapStateToProps)(Friends);
