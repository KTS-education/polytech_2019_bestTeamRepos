import React from "react";
import PropTypes from "prop-types";

import MainButton from "@components/MainButton";
import BlueLink from "@components/BlueLink";

import "./UserAccountHeader.css";

class UserAccountHeader extends React.Components {
  static propTypes = {
    UserAccountInfoObject: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      logoPath: PropTypes.string
      })
  }

  render() {
    return (
      <div className="user-account-header">
        <img src={logoPath} className="user-account-header__photo" alt="user's photo" />
        <div className="user-account-header__text-part">
          <div className="text-part__credentials">
          <p className="credentials">{name} {surname}</p>
          </div>
          <BlueLink children="Хочу получить 😌"/>
          <BlueLink children="Хочу подарить 😎"/>
          <MainButton children={<p className="button-size_txt">Поделиться</p>} className={"button-size"} />
        </div>
      </div>
        )
    }
}

export default UserAccountHeader;