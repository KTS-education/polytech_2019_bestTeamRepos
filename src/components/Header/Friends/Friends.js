import React from "react";

import { connect } from "react-redux";
import Routes from "@config/routes.js";

import FriendImgList from "./FriendImgList";
import LinkItem from "@components/LinkItem";

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
