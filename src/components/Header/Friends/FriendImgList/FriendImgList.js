import React from "react";
import PropTypes from "prop-types";

import "./FriendImgList.css";

class FriendImgList extends React.Component {
  static propTypes = {
    friend1: PropTypes.string,
    friend2: PropTypes.string,
    friend3: PropTypes.string
  };

  render() {
    const { friend1, friend2, friend3 } = this.props;

    return (
      <div className="HeaderFriends">
        <ul className="HeaderFriends__ImgList">
          <li className="HeaderFriends__ImgItem">
            <img
              src={friend1}
              className="HeaderFriends__FriendImg"
              alt="FriendImg1"
            />
          </li>

          <li className="HeaderFriends__ImgItem">
            <img
              src={friend2}
              className="HeaderFriends__FriendImg"
              alt="FriendImg2"
            />
          </li>

          <li className="HeaderFriends__ImgItem">
            <img
              src={friend3}
              className="HeaderFriends__FriendImg"
              alt="FriendImg3"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default FriendImgList;
