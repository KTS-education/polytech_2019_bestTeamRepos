import React from "react";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import MainButton from "@components/MainButton";

import FriendsInfo from "@data/YourFriendsInfo/mock.js";

import styles from "./FriendsContainer.module.scss";

export default class FriendsContainer extends React.Component {
  state = {
    visible: 5
  };

  componentDidMount() {
    // 1. Receive data
    //  here we create HOC function - service for receiving data
    // 2. Dispatch action to store
  }

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const hasMore = this.state.visible < FriendsInfo.length;
    if (FriendsInfo.length) {
      return (
        <div className={styles["friends-list-container"]}>
          {FriendsInfo.slice(0, this.state.visible).map(item => {
            return <Friend accountInfo={item} key={item.id} />;
          })}
          {hasMore && (
            <MainButton
              className={styles["friends-list-container__more-btn"]}
              onClick={this.loadmore}
              type="secondary"
            >
              Показать ещё
            </MainButton>
          )}
        </div>
      );
    } else {
      return <NoResults>Кажется, у тебя нет друзей</NoResults>;
    }
  }
}
