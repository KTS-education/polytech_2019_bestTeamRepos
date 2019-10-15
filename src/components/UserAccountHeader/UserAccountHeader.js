import React from "react";
import MainButton from "@components/MainButton";
import BlueLink from "@components/BlueLink";
import userAccount from "./mock.js";
import relievedEmoji from '@img/relievedFace.png';
import sunglassesEmoji from '@img/wantGive.png';
import "./UserAccountHeader.css";

class UserAccountHeader extends React.Component {
  render() {
    const { name, surname, logoPath } = userAccount;

    return (
      <div className="user-account-header">
        <img src={logoPath} className="user-account-header__photo" alt="user's photo" />
        <div className="user-account-header__text-part">
          <div className="text-part__credentials">
            <p className="credentials">{name} {surname}</p>
          </div>
          <div className="text-part__buttons-group">
            <BlueLink children={<span className="buttons-group__button">Хочу получить <img className="emoji" src={relievedEmoji} alt="relieved emoji" /></span>}/>
            <BlueLink children={<span className="buttons-group__button">Хочу подарить <img className="emoji" src={sunglassesEmoji} alt="cool emoji with sunglasses" /></span>}/>
          </div>
          <MainButton children={<p className="button-size_txt">Поделиться</p>} className={"button-size"} />
        </div>
      </div>
        )
    }
}

{/* <img className="emoji" src={popularEmoji} alt="emoji fo popular products" /> */}

export default UserAccountHeader;