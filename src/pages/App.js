import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { default as connectVK } from "@vkontakte/vk-connect";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import { api } from "@src/api.js";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";

class App extends Component {
  componentDidMount() {
    connectVK
      .sendPromise("VKWebAppGetUserInfo")
      .then(response => {
        console.log(response);
        api(`/api/user/auth${window.location.search}`, "POST", response)
          .then(result => {
            result.response
              ? console.log(result.response)
              : console.error(result.errorData);
          })
          .then(() =>
            api("/api/products/search", "GET", {
              query: "платье", // строка поиска
              lat: 55.764491899999996, // локация, пока хардкод
              lon: 37.6710281
            }).then(result => {
              if (result.response) {
                // this.setState({
                //   data: result.response.suggestions
                // });
                console.log(result.response);
              } else {
                console.error(result.error);
              }
            })
          );
      })
      .catch(error => console.log(error));
  }

  // fetchAccountInfo() {
  //   return connectVK
  //     .sendPromise("VKWebAppGetUserInfo", {
  //       params: {
  //         fields: "photo_100",
  //         v: "5.103"
  //       }
  //     })
  //     .then(response => response)
  //     .catch(error => console.log(error));
  // }

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
