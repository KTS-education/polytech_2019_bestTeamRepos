import React from "react";
import PropTypes from "prop-types";

import BlueLink from "@components/BlueLink";

import "./YourAccount.css";

class YourAccount extends React.Component {
  static propTypes = {
    AccountInfoObject: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      logoPath: PropTypes.string
    })
  };

  render() {
    const { name, surname, logoPath } = this.props.AccountInfoObject;

    return (
      <div className="your-account">
        <img src={logoPath} className="your-account__photo" alt="logo" />
        <BlueLink
          href="/mypage"
          children={name + " " + surname}
          className="your-account__text"
        />
      </div>
    );
  }
}

export default YourAccount;
