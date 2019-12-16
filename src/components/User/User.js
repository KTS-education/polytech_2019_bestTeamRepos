import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { default as connectVK } from "@vkontakte/vk-connect";
import { fetchProfile } from "@actions/fetchProfile";
import Button from "@components/Button";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import styles from "./User.module.scss";

import img from "@img/wishlist.png";

class User extends Component {
  static propTypes = {
    ids: PropTypes.string.isRequired
  };

  handleClick = async () => {
    let link = "https://vk.com/app7210429/profile/" + this.props.profile.id;
    let response = await connectVK.sendPromise("VKWebAppShowWallPostBox", {
      owner_id: this.props.profile.id,
      message: "Хочешь узнать, что я хочу? Посмотри мой вишлист!",
      close_comments: 1,
      friends_only: 1,
      attachments: link
    });
    console.log(response, img);
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
          <Button
            className={styles["button--share"]}
            onClick={this.handleClick}
          >
            Поделиться
          </Button>
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
