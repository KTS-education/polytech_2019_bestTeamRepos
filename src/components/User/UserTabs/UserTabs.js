import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import LinkItem from "@components/LinkItem";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import droolingFace from "@img/droolingFace.png";

import styles from "./UserTabs.module.scss";

class UserTabs extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  getUserId = () => {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  };

  render() {
    if (this.props.location.pathname.includes("/mypage")) {
      return (
        <div className={styles["text-part__buttons-group"]}>
          <LinkItem href="/mypage">
            <span className={styles["buttons-group__button"]}>
              Хочу получить{" "}
              <img
                className={styles["button__emoji"]}
                src={relievedEmoji}
                alt={styles["relieved emoji"]}
              />
            </span>
          </LinkItem>
          <LinkItem href="/mypage/what-i-want">
            <span className={styles["buttons-group__button"]}>
              Хочу подарить{" "}
              <img
                className={styles["button__emoji"]}
                src={sunglassesEmoji}
                alt="cool emoji with sunglasses"
              />
            </span>
          </LinkItem>
        </div>
      );
    } else if (this.props.location.pathname.includes("/myfriendspage")) {
      return (
        <div className={styles["text-part__buttons-group"]}>
          <LinkItem href={`/myfriendspage/${this.getUserId()}`}>
            <span className={styles["buttons-group__button"]}>
              Хочет получить{" "}
              <img
                className={styles["button__emoji"]}
                src={droolingFace}
                alt="drooling emoji"
              />
            </span>
          </LinkItem>
          <LinkItem href={`/myfriendspage/from-me/${this.getUserId()}`}>
            <span className={styles["buttons-group__button"]}>
              Хочу подарить{" "}
              <img
                className={styles["button__emoji"]}
                src={sunglassesEmoji}
                alt="cool emoji with sunglasses"
              />
            </span>
          </LinkItem>
        </div>
      );
    }
  }
}

export default withRouter(UserTabs);
