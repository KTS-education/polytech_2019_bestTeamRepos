import React from "react";
import PropTypes from "prop-types";
import { default as connectVK } from "@vkontakte/vk-connect";
import { connect } from "react-redux";

import LinkItem from "@components/LinkItem";
import Avatar from "@components/Avatar";

import Routes from "@config/routes.js";
import styles from "./YourAccount.module.scss";

class YourAccount extends React.Component {
  static propTypes = {
    AccountInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  };

  fetchCurrentUserProfile() {
    return connectVK
      .sendPromise("VKWebAppGetUserInfo", {
        params: {
          fields: "photo_100",
          v: "5.103"
        }
      })
      .then(response => response)
      .catch(error => console.log(error));
  }

  componentDidMount() {
    const { accountInfoLoaded } = this.props;
    this.fetchCurrentUserProfile().then(accountInfo => {
      accountInfoLoaded(accountInfo);
    });
  }

  render() {
    const { id, photo, name, surname } = this.props.accountInfo;

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

const mapStateToProps = ({ accountInfoHeader }) => {
  return {
    ...accountInfoHeader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    accountInfoLoaded: payload =>
      dispatch({ type: "ACCOUNT_INFO_LOADED", payload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourAccount);
