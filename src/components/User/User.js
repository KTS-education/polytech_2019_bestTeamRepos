import React from "react";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";

import userAccount from "@data/YourAccountInfo/mock.js";

import "./User.css";

class User extends React.Component {
  render() {
    const { name, surname, logoPath } = userAccount;
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

export default User;
