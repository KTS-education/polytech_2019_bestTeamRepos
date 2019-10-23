import React from "react";

import FriendImgList from "./FriendImgList";

import LinkItem from "@components/LinkItem";

import f1 from "@data/YourFriendsInfo/img/friend2.png";
import f2 from "@data/YourFriendsInfo/img/friend1.png";
import f3 from "@data/YourFriendsInfo/img/friend3.png";

import styles from "./Friends.module.scss";

class Friends extends React.Component {
  render() {
    return (
      <div className={styles["header-friends-container"]}>
        <LinkItem href="/friends" children="Мои друзья" />
        <FriendImgList friendsImages={[f1, f2, f3]} />
      </div>
    );
  }
}

export default Friends;
