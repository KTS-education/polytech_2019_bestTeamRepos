import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { default as connectVK } from "@vkontakte/vk-connect";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import { api } from "@src/api.js";
import { connect } from "react-redux";
import { headerFriendsLoaded } from "@actions/friendsHeader";
import { userIdLoaded } from "@actions/userId";
import {
  fetchResultsBegin,
  fetchResultsSuccess,
  fetchResultsFailure
} from "@actions/getSearchResults";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.scss";
import styles from "./App.module.scss";

class App extends Component {
  static propTypes = {
    headerFriendsList: PropTypes.arrayOf(PropTypes.object),
    userId: PropTypes.object
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
    const result2 = await connectVK.sendPromise("VKWebAppGetUserInfo", {
      params: {
        v: "5.103"
      }
    });
    const result = await api(`/api/user/auth${window.location.search}`, "POST");
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
    return {
      api_id: result.response.user_id,
      vk_id: result2.id,
      api_token: result.response.token
    };
  };

  apiGetItems = query => {
    return async dispatch => {
      if (!query) {
        dispatch(fetchResultsSuccess(null));
      } else {
        dispatch(fetchResultsBegin());
        const result = await api("/api/products/search", "GET", {
          query: query,
          lat: 55.764491899999996,
          lon: 37.6710281
        });

        if (result.response) {
          dispatch(fetchResultsSuccess(result.response.response.items));
        } else {
          dispatch(fetchResultsFailure(result.error));
        }
      }
    };
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const { headerFriendsLoaded, userIdLoaded } = this.props;
      const friends = await this.fetchFriends();
      const userInfo = await this.apiAuth();
      headerFriendsLoaded(friends);
      userIdLoaded(userInfo);
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
      dispatch(headerFriendsLoaded(headerFriendsList)),
    userIdLoaded: userId => dispatch(userIdLoaded(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
