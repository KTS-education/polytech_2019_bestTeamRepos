import React from "react";
import PropTypes from "prop-types";

import FriendImage from "./FriendImage";

import "./FriendImgList.css";

class FriendImgList extends React.Component {
  static propTypes = {
    friendsImages: PropTypes.array
  };

  render() {
    const friends = this.props.friendsImages;

    if (friends.length) {
      return (
        <div className="HeaderFriends">
          <ul className="HeaderFriends__ImgList">
            {friends.map(friend => {
              return <FriendImage ImageSrc={friend} />;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default FriendImgList;
