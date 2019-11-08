import React from "react";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import MainButton from "@components/MainButton";
import buttonTypes from "@config/buttonTypes";

import { connect } from "react-redux";

import styles from "./FriendsContainer.module.scss";

class FriendsContainer extends React.Component {
  state = {
    visible: 5
  };

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const { friendsList } = this.props.friendsList;

    const hasMore = this.state.visible < friendsList.length;
    if (friendsList.length) {
      return (
        <div className={styles["friends-list-container"]}>
          {friendsList.slice(0, this.state.visible).map(friend => {
            return <Friend accountInfo={friend} key={friend.id} />;
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
      return <NoResults>Кажется, у тебя нет друзей</NoResults>;
    }
  }
}

const mapStateToProps = ({ friendsList }) => {
  return {
    friendsList
  };
};

export default connect(mapStateToProps)(FriendsContainer);
