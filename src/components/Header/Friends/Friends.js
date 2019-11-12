import React from "react";
import PropTypes from "prop-types";

import FriendImgList from "./FriendImgList";

import { default as connectVK } from "@vkontakte/vk-connect";
import { connect } from "react-redux";
import { friendsLoaded } from "@actions/friendsContainer";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import styles from "./Friends.module.scss";

class Friends extends React.Component {
  static propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.object)
  };

  fetchFriends() {
    return connectVK
      .sendPromise("VKWebAppGetAuthToken", {
        app_id: 7186760,
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
    const { friendsLoaded } = this.props;
    this.fetchFriends().then(friendsList => {
      friendsLoaded(friendsList);
    });
  }

  render() {
    const { friendsList } = this.props;

    return (
      <div className={styles["header-friends-container"]}>
        <LinkItem href={Routes.friendListPage}>Мои друзья</LinkItem>
        <FriendImgList friendsImages={friendsList} />
      </div>
    );
  }
}

const mapStateToProps = ({ friendsList }) => {
  return {
    ...friendsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    friendsLoaded: friendsList => dispatch(friendsLoaded(friendsList))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
