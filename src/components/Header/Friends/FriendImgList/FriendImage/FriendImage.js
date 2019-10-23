import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendImage.module.scss";

class FriendImage extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string
  };

  render() {
    const { imageSrc } = this.props;
    return (
      <li className={styles["header-friends__img-item"]}>
        <img
          src={imageSrc}
          className={styles["img-item__friend-img"]}
          alt="FriendImg"
        />
      </li>
    );
  }
}

export default FriendImage;
