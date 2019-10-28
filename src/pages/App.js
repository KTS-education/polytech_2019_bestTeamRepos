import React from "react";
import { Route } from "react-router-dom";

import FriendList from "./FriendList";
import Main from "./Main";
import MyPage from "./MyPage";
import FriendPage from "./FriendPage";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";
const App = () => {
  return (
    <div className={styles["app"]}>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
      <Route path="/friends" component={FriendList} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/myfriendspage" component={FriendPage} />
    </div>
  );
};

export default App;
