import React from "react";
import PropTypes from "prop-types";

import "./FriendImage.css";

class FriendImgList extends React.Component {
  static propTypes = {
    ImageSrc: PropTypes.string
  };

  render() {
    const img = this.props.ImageSrc;

    return (
      <li className="HeaderFriends__ImgItem">
        <img src={img} className="HeaderFriends__FriendImg" alt="FriendImg" />
      </li>
    );
  }
}

export default FriendImgList;
