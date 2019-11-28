import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { default as connectVK } from "@vkontakte/vk-connect";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import { api } from "@src/api.js";
import { connect } from "react-redux";
import { headerFriendsLoaded } from "@actions/friendsHeader";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.css";
import styles from "./App.module.scss";

class App extends Component {
  static propTypes = {
    headerFriendsList: PropTypes.arrayOf(PropTypes.object)
  };

  fetchFriends = async () => {
    return connectVK
      .sendPromise("VKWebAppGetAuthToken", {
        app_id: 7210429,
        scope: "friends,status"
      })
      .then(response => response.access_token)
      .then(token => {
        return connectVK.sendPromise("VKWebAppCallAPIMethod", {
          method: "friends.get",
          request_id: "friends",
          params: {
            count: 3,
            order: "random",
            fields: "photo_100",
            v: "5.103",
            access_token: token
          }
        });
      })
      .then(response => response.response.items);
  };

  apiAuth = async () => {
    const result = await api(`/api/user/auth${window.location.search}`, "POST");
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
  };

  apiGetItems = async query => {
    const result = await api("/api/products/search", "GET", {
      query: query, // строка поиска
      lat: 55.764491899999996, // локация, пока хардкод
      lon: 37.6710281
    });

    if (result.response) {
      // this.setState({
      //   data: result.response
      // });
      console.log(result.response.response.items);
    } else {
      console.error(result.error);
    }
  };

  async componentDidMount() {
    try {
      const friends = await this.fetchFriends();
      const { headerFriendsLoaded } = this.props;
      headerFriendsLoaded(friends);

      await this.apiAuth();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className={styles["app"]}>
        <Header />
        <Switch>
          <Route
            exact
            path={Routes.mainPage}
            render={props => <Main apiGetItems={this.apiGetItems} />}
          />
          <Route path={Routes.friendListPage} component={FriendList} />
          <Route path={Routes.profile.path} render={props => <Profile />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ headerFriendsList }) => {
  return {
    ...headerFriendsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    headerFriendsLoaded: headerFriendsList =>
      dispatch(headerFriendsLoaded(headerFriendsList))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
