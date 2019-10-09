import React from "react";
// import PropTypes from 'prop-types';

import FriendImgList from "./FriendImgList";

import f1 from "../../../img/accounts/friends/friend2.png";
import f2 from "../../../img/accounts/friends/friend1.png";
import f3 from "../../../img/accounts/friends/friend3.png";

import "./Friends.css";

class Friends extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Header-Friends-Container">
        <a href="/" className="Header-Friends-Container__Text">
          Мои друзья
        </a>
        <FriendImgList friend1={f1} friend2={f2} friend3={f3} />
      </div>
    );
  }
}

export default Friends;
