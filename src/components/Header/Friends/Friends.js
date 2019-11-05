import React from "react";
import PropTypes from "prop-types";

import FriendImgList from "./FriendImgList";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import styles from "./Friends.module.scss";

export default class Friends extends React.Component {
  static propTypes = {
    friends: PropTypes.object.isRequired
  };

  render() {
    const { friends } = this.props.friends;

    return (
      <div className={styles["header-friends-container"]}>
        <LinkItem href={Routes.friendListPage}>Мои друзья</LinkItem>
        <FriendImgList friendsImages={friends} />
      </div>
    );
  }
}
