import React from "react";

import FriendImgList from "./FriendImgList";

import f1 from "../../../img/accounts/friends/friend2.png";
import f2 from "../../../img/accounts/friends/friend1.png";
import f3 from "../../../img/accounts/friends/friend3.png";

import "./Friends.css";

class Friends extends React.Component {
  render() {
    return (
      <div className="Header-Friends-Container">
        <a href="/" className="Header-Friends-Container__Text">
          Мои друзья
        </a>
        <FriendImgList friendsImages={[f1, f2, f3]} />
      </div>
    );
  }
}

export default Friends;
