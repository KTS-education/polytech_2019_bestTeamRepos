import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "@components/Button";
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

  componentWillUnmount() {}

  render() {
    const { name, surname, photo, id: profileId } = this.props.profile;
    const { id: accountId } = this.props.accountInfoHeader;

    return (
      <div className={styles["user"]}>
        <Avatar className={styles["user__photo"]} src={photo} />
        <div className={styles["user__text-part"]}>
          <p className={styles["credentials"]}>
            {name} {surname}
          </p>
          <UserTabs profileId={profileId} accountId={accountId} />
          <Button className={styles["button--share"]}>Поделиться</Button>
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
