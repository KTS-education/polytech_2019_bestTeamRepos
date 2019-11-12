import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import droolingFace from "@img/droolingFace.png";

import styles from "./UserTabs.module.scss";

class UserTabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    currentId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { currentId, id } = this.props;

    if (currentId === id) {
      return (
        <div className={styles["buttons-group"]}>
          <LinkItem href={Routes.profile.create(currentId)}>
            <span className={styles["button__content"]}>
              Хочу получить{" "}
              <img
                className={styles["button__emoji"]}
                src={relievedEmoji}
                alt={styles["relieved emoji"]}
              />
            </span>
          </LinkItem>
          <LinkItem href={Routes.profile.createWhatIwant(currentId)}>
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
    } else {
      return (
        <div className={styles["buttons-group"]}>
          <LinkItem href={Routes.profile.create(currentId)}>
            <span className={styles["button__content"]}>
              Хочет получить{" "}
              <img
                className={styles["button__emoji"]}
                src={droolingFace}
                alt="drooling emoji"
              />
            </span>
          </LinkItem>
          <LinkItem href={Routes.profile.createFromMe(currentId)}>
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
}

const mapStateToProps = ({ profile }) => {
  return {
    ...profile
  };
};

export default connect(mapStateToProps)(withRouter(UserTabs));
