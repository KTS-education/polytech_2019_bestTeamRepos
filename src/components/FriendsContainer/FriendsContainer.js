import React from "react";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import SecondaryButton from "@components/SecondaryButton";

import FriendsInfo from "@data/YourFriendsInfo/mock.js";

import "./FriendsContainer.css";

class FriendsContainer extends React.Component {
  state = {
    visible: 5
  };

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    if (FriendsInfo.length) {
      return (
        <div className="friends-list-container">
          {FriendsInfo.slice(0, this.state.visible).map(item => {
            return <Friend accountInfoObject={item} key={item.id} />;
          })}
          {this.state.visible < FriendsInfo.length && (
            <SecondaryButton className="more-btn" actionHandler={this.loadmore}>
              Показать ещё
            </SecondaryButton>
          )}
        </div>
      );
    } else {
      return <NoResults children="Кажется, у тебя нет друзей" />;
    }
  }
}

export default FriendsContainer;
