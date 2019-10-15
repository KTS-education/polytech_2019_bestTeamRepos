import React from "react";
import PropTypes from "prop-types";

import FriendImage from "./FriendImage";

import "./FriendImgList.css";

class FriendImgList extends React.Component {
  static propTypes = {
    friendsImages: PropTypes.array.isRequired
  };

  render() {
    const friends = this.props.friendsImages;

    if (friends.length) {
      return (
        <div className="header-friends">
          <ul className="header-friends__img-list">
            {friends.map(item => {
              return <FriendImage imageSrc={item} key={item} />;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default FriendImgList;
