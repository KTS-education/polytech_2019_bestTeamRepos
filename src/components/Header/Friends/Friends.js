import React from "react";
import PropTypes from "prop-types";

import FriendImgList from "./FriendImgList";

import { connect } from "react-redux";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import styles from "./Friends.module.scss";

class Friends extends React.Component {
  static propTypes = {
    headerFriendsList: PropTypes.arrayOf(PropTypes.object)
  };

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

export default connect(mapStateToProps)(Friends);
