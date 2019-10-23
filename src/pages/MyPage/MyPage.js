import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import styles from "./MyPage.module.scss";

class MyPage extends React.Component {
  render() {
    return (
      <div className={styles["my-page-container"]}>
        <Route path="/mypage" component={User} />
        <Route path="/mypage" component={MyGiftsContainer} />
      </div>
    );
  }
}

export default MyPage;
