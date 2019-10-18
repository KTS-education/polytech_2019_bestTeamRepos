import React from "react";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import SecondaryButton from "@components/SecondaryButton";

import FriendsInfo from "@data/YourFriendsInfo/mock.js";

import "./FriendsContainer.css";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 5
    };
    this.loadmore = this.loadmore.bind(this);
  }
  loadmore() {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  }
  render() {
    if (FriendsInfo.length) {
      return (
        <div className="friends-list-container">
          <ul className="friends-list-container__ul">
            {FriendsInfo.slice(0, this.state.visible).map(item => {
              return <Friend AccountInfoObject={item} key={item.id} />;
            })}
          </ul>
          {this.state.visible < FriendsInfo.length && (
            <SecondaryButton
              children={<span>Показать ещё</span>}
              className="more-btn"
              actionHandler={this.loadmore}
            />
          )}
        </div>
      );
    } else {
      return <NoResults text="Кажется, у тебя нет друзей" />;
    }
  }
}

export default FriendsContainer;
