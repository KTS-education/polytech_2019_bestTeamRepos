import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Image from "@img/no_friends.png";

import "./EmptyFriendList.css";

class EmptyFriendList extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames("no-friends", className)}>
        <img src={Image} alt="sad" className="no-friends__img"></img>
        <p>Кажется, у тебя нет друзей</p>
      </div>
    );
  }
}

export default EmptyFriendList;
