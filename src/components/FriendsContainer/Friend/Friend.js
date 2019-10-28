import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import styles from "./Friend.module.scss";

class Friend extends React.Component {
  static propTypes = {
    accountInfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      logoPath: PropTypes.string.isRequired
    })
  };

  state = {
    path: `/myfriendspage/${this.props.accountInfo.id}`
  };

  render() {
    const { name, surname, logoPath } = this.props.accountInfo;

    return (
      <div className={styles["friend-item"]}>
        <img
          src={logoPath}
          className={styles["friend-item__photo"]}
          alt="Friend pict"
        />
        <div className={styles["friend-item__text-part"]}>
          <div className={styles["text-part__ns"]}>
            <p className={styles["ns__txt"]}>
              {name} {surname}
            </p>
          </div>
          <MainButton className={styles["button-learn"]} to={this.state.path}>
            Узнать, что подарить
          </MainButton>
        </div>
      </div>
    );
  }
}

export default Friend;
