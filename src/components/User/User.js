import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import styles from "./User.module.scss";

class User extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      photo: PropTypes.string,
      id: PropTypes.number
    }),
    accountInfo: PropTypes.object.isRequired
  };

  static defaultProps = {
    profile: PropTypes.shape({
      name: null,
      surname: null,
      photo: null,
      id: null
    })
  };

  render() {
    const { name, surname, photo, id: profileId } = this.props.profile;
    const { id: accountId } = this.props.accountInfo;

    return (
      <div className={styles["user"]}>
        <Avatar className={styles["user__photo"]} src={photo} />
        <div className={styles["user__text-part"]}>
          <p className={styles["credentials"]}>
            {name} {surname}
          </p>
          <UserTabs profileId={profileId} accountId={accountId} />
          <MainButton className={styles["button--share"]}>
            Поделиться
          </MainButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile, accountInfoHeader }) => {
  return {
    ...profile,
    ...accountInfoHeader
  };
};

export default connect(mapStateToProps)(User);
