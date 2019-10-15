import React from "react";
import { Route } from "react-router-dom";

import FriendList from "./FriendList";
import Main from "./Main";

import Header from "@components/Header";

import "@constantcss/constants.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
      <Route path="/friends" component={FriendList} />
    </div>
  );
};

export default App;
