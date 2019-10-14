import React from "react";

import Friend from "./Friend";

import FriendsInfo from "@components/YourFriendsInfo/mock.js";

import "./FriendsListContainer.css";

class FriendsListContainer extends React.Component {
  render() {
    return (
      <div className="friendsListContainer">
        <ul>
          {FriendsInfo.map(item => {
            return <Friend AccountInfoObject={item} key={item.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsListContainer;
