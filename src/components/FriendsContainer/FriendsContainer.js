import React from "react";
import PropTypes from "prop-types";

import Friend from "./Friend";

import { default as connectVK } from "@vkontakte/vk-connect";

import NoResults from "@components/NoResults";
import MainButton from "@components/MainButton";
import buttonTypes from "@config/buttonTypes";

import { connect } from "react-redux";
import { friendsLoaded } from "@actions/friendsContainer";

import styles from "./FriendsContainer.module.scss";

class FriendsContainer extends React.Component {
  static propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.object)
  };

  state = {
    visible: 5
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
            order: "name",
            fields: "photo_200",
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

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const { friendsList } = this.props;

    const hasMore = this.state.visible < friendsList.length;
    if (friendsList.length) {
      return (
        <div className={styles["friends-list-container"]}>
          {friendsList.slice(0, this.state.visible).map(friend => {
            return <Friend friendInfo={friend} key={friend.id} />;
          })}
          {hasMore && (
            <MainButton
              className={styles["friends-list-container__more-btn"]}
              onClick={this.loadmore}
              type={buttonTypes.secondary}
            >
              Показать ещё
            </MainButton>
          )}
        </div>
      );
    } else {
      return <NoResults children="Кажется, у тебя нет друзей" />;
    }
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
)(FriendsContainer);
