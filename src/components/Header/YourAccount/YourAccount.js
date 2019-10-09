import React from "react";
import PropTypes from "prop-types";

import Logo from "@img/accounts/your/account-photo.png";

import "./YourAccount.css";

class YourAccount extends React.Component {
  static propTypes = {
    Name: PropTypes.string.isRequired,
    Surname: PropTypes.string.isRequired,
    LogoPath: PropTypes.string
  };

  static defaultProps = {
    LogoPath: Logo
  };

  render() {
    const { Name, Surname, LogoPath } = this.props;

    return (
      <div className="Your-Account">
        <img src={LogoPath} className="Your-Account__photo" alt="logo" />
        <a href="/" className="Your-Account__text">
          {Name} {Surname}
        </a>
      </div>
    );
  }
}

export default YourAccount;
