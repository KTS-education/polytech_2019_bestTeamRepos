import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import api from "@src/api.js";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";

class App extends Component {
  componentDidMount() {
    api(`/api/user/auth${window.location.search}`, "POST").then(result => {
      if (result.response) {
        console.log(result.response); // success
      } else {
        console.error(result.error); // error
      }
    });

    api("/api/products/suggest", "GET", {
      query: "iphone", // строка поиска
      lat: 55.764491899999996, // локация, пока хардкод
      lon: 37.6710281
    }).then(result => {
      if (result.response) {
        this.setState({
          data: result.response.suggestions
        });
      } else {
        console.error(result.error);
      }
    });
  }

  render() {
    return (
      <div className={styles["app"]}>
        <Header />
        <Switch>
          <Route exact path={Routes.mainPage} component={Main} />
          <Route path={Routes.friendListPage} component={FriendList} />
          <Route path={Routes.profile.path} render={props => <Profile />} />
        </Switch>
      </div>
    );
  }
}

export default App;
