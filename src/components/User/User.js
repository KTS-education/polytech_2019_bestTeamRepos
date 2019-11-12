import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import styles from "./User.module.scss";

class User extends Component {
  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);

    const { name, surname, photo, isMyProfile } = this.props.profile;

    return (
      <div className={styles["user"]}>
        <Avatar className={styles["user__photo"]} src={photo} />
        <div className={styles["user__text-part"]}>
          <p className={styles["credentials"]}>
            {name} {surname}
          </p>
          <UserTabs isMyProfile={isMyProfile} id={id} />
          <MainButton className={styles["button--share"]}>
            Поделиться
          </MainButton>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
