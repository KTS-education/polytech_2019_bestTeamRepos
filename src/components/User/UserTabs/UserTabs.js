import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import LinkItem from "@components/LinkItem";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import droolingFace from "@img/droolingFace.png";

import "./UserTabs.css";

class UserTabs extends React.Component {
  constructor() {
    super();
    this.getUserId = this.getUserId.bind(this);
  }

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  getUserId() {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  }

  render() {
    if (this.props.location.pathname.includes("/mypage")) {
      return (
        <div className="text-part__buttons-group">
          <LinkItem
            href="/mypage"
            children={
              <span className="buttons-group__button">
                Хочу получить{" "}
                <img
                  className="button__emoji"
                  src={relievedEmoji}
                  alt="relieved emoji"
                />
              </span>
            }
          />
          <LinkItem
            href="/mypage/what-i-want"
            children={
              <span className="buttons-group__button">
                Хочу подарить{" "}
                <img
                  className="button__emoji"
                  src={sunglassesEmoji}
                  alt="cool emoji with sunglasses"
                />
              </span>
            }
          />
        </div>
      );
    } else if (this.props.location.pathname.includes("/myfriendspage")) {
      return (
        <div className="text-part__buttons-group">
          <LinkItem
            href={`/myfriendspage/${this.getUserId()}`}
            children={
              <span className="buttons-group__button">
                Хочет получить{" "}
                <img
                  className="button__emoji"
                  src={droolingFace}
                  alt="drooling emoji"
                />
              </span>
            }
          />
          <LinkItem
            href={`/myfriendspage/from-me/${this.getUserId()}`}
            children={
              <span className="buttons-group__button">
                Хочет подарить{" "}
                <img
                  className="button__emoji"
                  src={sunglassesEmoji}
                  alt="cool emoji with sunglasses"
                />
              </span>
            }
          />
        </div>
      );
    }
  }
}

export default withRouter(UserTabs);
