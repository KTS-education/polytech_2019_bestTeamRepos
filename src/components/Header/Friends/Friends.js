import React from "react";

import FriendImgList from "./FriendImgList";

import BlueLink from "@components/BlueLink";

import f1 from "@img/accounts/friends/friend2.png";
import f2 from "@img/accounts/friends/friend1.png";
import f3 from "@img/accounts/friends/friend3.png";

import "./Friends.css";

class Friends extends React.Component {
  render() {
    return (
      <div className="header-friends-container">
        <a href="/" className="header-friends-container__text">
          Мои друзья
        </a>{" "}
        */}
        <FriendImgList friendsImages={[f1, f2, f3]} />
      </div>
    );
  }
}

export default Friends;
