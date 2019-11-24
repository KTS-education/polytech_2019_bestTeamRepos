import React from "react";
import PropTypes from "prop-types";

import FriendImgList from "./FriendImgList";

import { default as connectVK } from "@vkontakte/vk-connect";
import { connect } from "react-redux";
import { headerFriendsLoaded } from "@actions/friendsHeader";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import styles from "./Friends.module.scss";

class Friends extends React.Component {
  static propTypes = {
    headerFriendsList: PropTypes.arrayOf(PropTypes.object)
  };

  fetchFriends() {
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
  }

  componentDidMount() {
    const { headerFriendsLoaded } = this.props;
    this.fetchFriends().then(headerFriendsList => {
      headerFriendsLoaded(headerFriendsList);
    });
  }

  render() {
    const { headerFriendsList } = this.props;

    return (
      <div className={styles["header-friends-container"]}>
        <LinkItem href={Routes.friendListPage}>Мои друзья</LinkItem>
        <FriendImgList friendsImages={headerFriendsList} />
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
)(Friends);
