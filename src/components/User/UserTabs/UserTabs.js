import React from "react";
import PropTypes from "prop-types";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import droolingFace from "@img/droolingFace.png";

import styles from "./UserTabs.module.scss";

class UserTabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    profileId: PropTypes.number,
    accountId: PropTypes.number
  };

  static defaultProps = {
    className: null,
    profileId: null,
    accountId: null
  };

  render() {
    const { profileId, accountId } = this.props;

    const firstBtn =
      profileId === accountId ? (
        <LinkItem href={Routes.profile.create(profileId)}>
          <span className={styles["button__content"]}>
            Хочу получить{" "}
            <img
              className={styles["button__emoji"]}
              src={relievedEmoji}
              alt={styles["relieved emoji"]}
            />
          </span>
        </LinkItem>
      ) : (
        <LinkItem href={Routes.profile.create(profileId)}>
          <span className={styles["button__content"]}>
            Хочет получить{" "}
            <img
              className={styles["button__emoji"]}
              src={droolingFace}
              alt="drooling emoji"
            />
          </span>
        </LinkItem>
      );

    return (
      <div className={styles["buttons-group"]}>
        {firstBtn}
        <LinkItem href={Routes.profile.createFromMe(profileId)}>
          <span className={styles["button__content"]}>
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

export default UserTabs;
