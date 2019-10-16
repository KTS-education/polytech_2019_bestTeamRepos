import React from "react";

import MainButton from "@components/MainButton";
import BlueLink from "@components/BlueLink";
import userAccount from "./mock.js";
import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import "./UserAccountHeader.css";

class UserAccountHeader extends React.Component {
  render() {
    const { name, surname, logoPath } = userAccount;

    return (
      <div className="user-account-header">
        <img
          src={logoPath}
          className="user-account-header__photo"
          alt="user's Avatar"
        />
        <div className="user-account-header__text-part">
          <div className="text-part__credentials">
            <p className="credentials">
              {name} {surname}
            </p>
          </div>
          <div className="text-part__buttons-group">
            <BlueLink
              href="/mypage"
              children={
                <span className="buttons-group__button">
                  Хочу получить{" "}
                  <img
                    className="button__emoji"
                    src={relievedEmoji}
                    alt="relieved emoji"
                  />
                </span>
              }
            />
            <BlueLink
              href="/mypage/what-i-want"
              children={
                <span className="buttons-group__button">
                  Хочу подарить{" "}
                  <img
                    className="button__emoji"
                    src={sunglassesEmoji}
                    alt="cool emoji with sunglasses"
                  />
                </span>
              }
            />
          </div>
          <MainButton
            children={<span>Поделиться</span>}
            className={"button-share"}
          />
        </div>
      </div>
    );
  }
}

export default UserAccountHeader;
