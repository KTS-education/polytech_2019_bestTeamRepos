import React from "react";
import PropTypes from "prop-types";

import LinkItem from "@components/LinkItem";

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
        <LinkItem href="/mypage" className="your-account__text">
          {name} {surname}
        </LinkItem>
      </div>
    );
  }
}

export default YourAccount;
