import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import Avatar from "@components/Avatar";
import Routes from "@config/routes.js";
import styles from "./Friend.module.scss";

export default class Friend extends React.Component {
  static propTypes = {
    friendInfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      photo_100: PropTypes.string.isRequired
    })
  };

  render() {
    const {
      id,
      first_name: name,
      last_name: surname,
      photo_100: photo
    } = this.props.friendInfo;

    return (
      <div className={styles["friend-item"]}>
        <Avatar
          src={photo}
          className={styles["friend-item__photo"]}
          alt="Friend pict"
        />
        <div className={styles["friend-item__text-part"]}>
          <div className={styles["text-part__ns"]}>
            <p className={styles["ns__txt"]}>
              {name} {surname}
            </p>
          </div>
          <MainButton
            className={styles["button--learn"]}
            to={Routes.profile.create(id)}
          >
            Узнать, что подарить
          </MainButton>
        </div>
      </div>
    );
  }
}
