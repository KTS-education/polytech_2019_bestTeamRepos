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
      <li className="header-friends__img-item">
        <img src={imageSrc} className="img-item__friend-img" alt="FriendImg" />
      </li>
    );
  }
}

export default FriendImage;
