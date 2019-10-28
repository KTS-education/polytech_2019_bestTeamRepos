import React from "react";
import PropTypes from "prop-types";

import LinkItem from "@components/LinkItem";
import styles from "./YourAccount.module.scss";

class YourAccount extends React.Component {
  static propTypes = {
    AccountInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      logoPath: PropTypes.string.isRequired
    })
  };

  render() {
    const { name, surname, logoPath } = this.props.AccountInfo;

    return (
      <div className={styles["your-account"]}>
        <img
          src={logoPath}
          className={styles["your-account__photo"]}
          alt="logo"
        />
        <LinkItem href="/mypage" className={styles["your-account__text"]}>
          {name} {surname}
        </LinkItem>
      </div>
    );
  }
}

export default YourAccount;
