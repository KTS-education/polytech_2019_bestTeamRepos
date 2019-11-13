import React from "react";
import PropTypes from "prop-types";
import { default as connectVK } from "@vkontakte/vk-connect";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import Button from "@components/Button";
import Loader from "@components/Loader";
import buttonTypes from "@config/buttonTypes";

import { connect } from "react-redux";
import {
  fetchFriendsBegin,
  fetchFriendsSuccess,
  fetchFriendsFailure
} from "@actions/friendsContainer";

import styles from "./FriendsContainer.module.scss";

class FriendsContainer extends React.Component {
  static propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.object)
  };

  state = {
    visible: 5
  };

  fetchFriends(friendsCount = 5000) {
    return dispatch => {
      dispatch(fetchFriendsBegin());
      connectVK
        .sendPromise("VKWebAppGetAuthToken", {
          app_id: 7186760,
          scope: "friends,status"
        })
        .then(response => response.access_token)
        .then(token =>
          connectVK.sendPromise("VKWebAppCallAPIMethod", {
            method: "friends.get",
            request_id: "friends",
            params: {
              count: friendsCount,
              order: "name",
              fields: "photo_100",
              v: "5.103",
              access_token: token
            }
          })
        )
        .then(response =>
          dispatch(fetchFriendsSuccess(response.response.items))
        )
        .catch(error => dispatch(fetchFriendsFailure(error)));
    };
  }

  componentDidMount() {
    const { friendsList } = this.props;
    if (!friendsList.length) {
      this.props.dispatch(this.fetchFriends());
    }
  }

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const { friendsList, isLoading, error } = this.props;

    const hasMore = this.state.visible < friendsList.length;

    if (error) {
      return <div>{error}</div>;
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (friendsList.length) {
        return (
          <div className={styles["friends-list-container"]}>
            {friendsList.slice(0, this.state.visible).map(friend => {
              return <Friend friendInfo={friend} key={friend.id} />;
            })}
            {hasMore && (
              <Button
                className={styles["friends-list-container__more-btn"]}
                onClick={this.loadmore}
                type={buttonTypes.secondary}
              >
                Показать ещё
              </Button>
            )}
          </div>
        );
      } else {
        return <NoResults children="Кажется, у тебя нет друзей" />;
      }
    }
  }
}

const mapStateToProps = ({ friendsList, isLoading, error }) => {
  return {
    ...friendsList,
    ...isLoading,
    ...error
  };
};

export default connect(mapStateToProps)(FriendsContainer);
