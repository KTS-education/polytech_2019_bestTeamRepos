import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import styles from "./User.module.scss";

class User extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired
    }),
    match: PropTypes.object.isRequired
  };

  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);

    const { name, surname, photo } = this.props.profile;

    return (
      <div className={styles["user"]}>
        <Avatar className={styles["user__photo"]} src={photo} />
        <div className={styles["user__text-part"]}>
          <p className={styles["credentials"]}>
            {name} {surname}
          </p>
          <UserTabs currentId={id} />
          <MainButton className={styles["button--share"]}>
            Поделиться
          </MainButton>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
