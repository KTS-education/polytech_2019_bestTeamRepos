import React from "react";
import PropTypes from "prop-types";

import "./FriendImage.css";

class FriendImage extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string
  };

  render() {
    const { imageSrc } = this.props;
    return (
      <li className="HeaderFriends__ImgItem">
        <img
          src={imageSrc}
          className="HeaderFriends__FriendImg"
          alt="FriendImg"
        />
      </li>
    );
  }
}

export default FriendImage;
