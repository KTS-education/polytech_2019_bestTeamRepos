import React from "react";
import PropTypes from "prop-types";

import FriendImage from "./FriendImage";

import styles from "./FriendImgList.module.scss";

class FriendImgList extends React.Component {
  static propTypes = {
    friendsImages: PropTypes.array.isRequired
  };

  render() {
    const friends = this.props.friendsImages;

    if (friends.length) {
      return (
        <div className={styles["header-friends"]}>
          <ul className={styles["header-friends__img-list"]}>
            {friends.map(item => (
              <FriendImage imageSrc={item} key={item} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default FriendImgList;
