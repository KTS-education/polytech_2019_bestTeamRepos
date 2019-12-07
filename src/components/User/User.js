import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProfile } from "@actions/fetchProfile";
import Button from "@components/Button";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import styles from "./User.module.scss";

class User extends Component {
  static propTypes = {
    ids: PropTypes.string.isRequired
  };

  async componentDidMount() {
    const { ids } = this.props;
    await this.props.fetchProfile(ids);
  }

  render() {
    const { isLoading } = this.props;
    const { name, surname, photo, id: profileId } = this.props.profile;
    const { id: accountId } = this.props.accountInfoHeader;

    if (isLoading) return <div className={styles["user"]}></div>;

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
    accountInfoHeader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: id => dispatch(fetchProfile(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
