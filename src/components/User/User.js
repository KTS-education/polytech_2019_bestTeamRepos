import React from "react";
import { useParams } from "react-router-dom";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import friendsAccounts from "@data/YourFriendsInfo/mock.js";

import styles from "./User.module.scss";

function User({ profile }) {
  let { id } = useParams();
  id = parseInt(id);

  const { name, surname, logoPath, isMyProfile } =
    profile.id === id
      ? profile
      : friendsAccounts.find(friend => friend.id === id);

  return (
    <div className={styles["user"]}>
      <Avatar className={styles["user__photo"]} src={logoPath} />
      <div className={styles["user__text-part"]}>
        <p className={styles["credentials"]}>
          {name} {surname}
        </p>
        <UserTabs isMyProfile={isMyProfile} id={id} />
        <MainButton className={styles["button--share"]}>Поделиться</MainButton>
      </div>
    </div>
  );
}

export default User;
