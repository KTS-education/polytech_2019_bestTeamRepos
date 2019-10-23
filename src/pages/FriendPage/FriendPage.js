import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import styles from "./FriendPage.module.scss";

class FriendPage extends React.Component {
  render() {
    return (
      <div className={styles["friend-page-container"]}>
        <Route path="/myfriendspage" component={User} />
      </div>
    );
  }
}

export default FriendPage;
