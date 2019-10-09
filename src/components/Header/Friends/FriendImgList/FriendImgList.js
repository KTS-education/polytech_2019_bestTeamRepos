import React from "react";
import PropTypes from "prop-types";

import "@constantcss/constants.css";
import "./FriendImgList.css";

class FriendImgList extends React.Component {
  static propTypes = {
    friendsImages: PropTypes.array.isRequired
  };

  render() {
    const friends = this.props.friendsImages;

    return (
      <div className="HeaderFriends">
        <ul className="HeaderFriends__ImgList">
          <li className="HeaderFriends__ImgItem">
            <img
              src={friends[0]}
              className="HeaderFriends__FriendImg"
              alt="FriendImg1"
            />
          </li>

          <li className="HeaderFriends__ImgItem">
            <img
              src={friends[1]}
              className="HeaderFriends__FriendImg"
              alt="FriendImg2"
            />
          </li>

          <li className="HeaderFriends__ImgItem">
            <img
              src={friends[2]}
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
