import React from "react";

import Friend from "./Friend";
import EmptyFriendList from "./EmptyFriendList";

import SecondaryButton from "@components/SecondaryButton";
import FriendsInfo from "./YourFriendsInfo/mock.js";

import "./FriendsListContainer.css";

class FriendsListContainer extends React.Component {
  render() {
    if (FriendsInfo.length) {
      return (
        <div className="friendsListContainer">
          <ul className="friendsListContainer__Ul">
            {FriendsInfo.map((item, index) => {
              if (index % 5 === 0 && index) {
                return (
                  <li className="friendsListContainer__Li" key="more">
                    <SecondaryButton
                      children={<span>Показать ещё</span>}
                      className="moreBtn"
                    />
                  </li>
                );
              } else {
                return <Friend AccountInfoObject={item} key={item.id} />;
              }
            })}
          </ul>
        </div>
      );
    } else {
      return <EmptyFriendList className="noFriends" />;
    }
  }
}

export default FriendsListContainer;
