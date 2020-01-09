import React from "react";

import { connect } from "react-redux";
import Routes from "@config/routes.js";

import LinkItem from "@components/LinkItem";
import Avatar from "@components/Avatar";

import styles from "./YourAccount.module.scss";

class YourAccount extends React.Component {
  render() {
    const { id, photo, name, surname } = this.props.accountInfoHeader;
    const { isLoading } = this.props;

    if (isLoading) return <div className={styles["your-account"]}></div>;

    return (
      <div className={styles["your-account"]}>
        <Avatar
          src={photo}
          className={styles["your-account__photo"]}
          alt="user's photo"
        />
        <LinkItem
          href={Routes.profile.create(id)}
          className={styles["your-account__text"]}
        >
          {name} {surname}
        </LinkItem>
      </div>
    );
  }
}

const mapStateToProps = ({ accountInfoHeader, isLoading }) => {
  return {
    ...accountInfoHeader,
    ...isLoading
  };
};

export default connect(mapStateToProps)(YourAccount);
