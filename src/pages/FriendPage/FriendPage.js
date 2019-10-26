import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import FriendGiftsContainer from "@components/FriendGiftsContainer";
import styles from "./FriendPage.module.scss";

class FriendPage extends React.Component {
  render() {
    return (
      <div className={styles["friend-page-container"]}>
        <Route path="/myfriendspage" component={User} />
        <Route path="/myfriendspage" component={FriendGiftsContainer} />
      </div>
    );
  }
}

export default FriendPage;
