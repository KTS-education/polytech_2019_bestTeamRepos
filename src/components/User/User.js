import React from "react";
import { withRouter } from "react-router-dom";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";

import userAccount from "@data/YourAccountInfo/mock.js";
import friendsAccounts from "@data/YourFriendsInfo/mock.js";

import "./User.css";

class User extends React.Component {
  getUserId() {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  }

  getUserData() {
    if (this.props.location.pathname.includes("/mypage")) {
      return userAccount;
    } else if (this.props.location.pathname.includes("/myfriendspage")) {
      const id = this.getUserId();
      for (const key in friendsAccounts) {
        if (friendsAccounts[key].id === id) {
          return friendsAccounts[key];
        }
      }
    }
  }

  render() {
    const { name, surname, logoPath } = this.getUserData();
    return (
      <div className="user">
        <img src={logoPath} className="user__photo" alt="user's Avatar" />
        <div className="user__text-part">
          <div className="text-part__credentials">
            <p className="credentials">
              {name} {surname}
            </p>
          </div>
          <UserTabs />
          <MainButton
            children={<span>Поделиться</span>}
            className={"button-share"}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(User);
