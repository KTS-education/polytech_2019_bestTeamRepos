import React from "react";
import PropTypes from "prop-types";

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
      <div className="Your-Account">
        <img src={logoPath} className="Your-Account__photo" alt="logo" />
        <a href="/" className="Your-Account__text">
          {name} {surname}
        </a>
      </div>
    );
  }
}

export default YourAccount;
