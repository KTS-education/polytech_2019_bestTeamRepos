import React from "react";
import PropTypes from "prop-types";

import FriendImage from "./FriendImage";

import styles from "./FriendImgList.module.scss";

class FriendImgList extends React.Component {
  static propTypes = {
    friendsImages: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { friendsImages } = this.props;
    if (friendsImages.length) {
      return (
        <div className={styles["header-friends"]}>
          <ul className={styles["header-friends__img-list"]}>
            {friendsImages.map(item => (
              <FriendImage imageSrc={item.photo_100} key={item.id} />
            ))}
          </ul>
        </div>
      );
    } else
      return (
        <div className={styles["header-friends"]}>
          <ul className={styles["header-friends__img-list"]}></ul>
        </div>
      );
  }
}

export default FriendImgList;
