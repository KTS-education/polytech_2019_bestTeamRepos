import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import styles from "./ListItem.module.scss";

export default class ListItem extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    userId: PropTypes.number
  };

  static defaultProps = { userId: null };

  render() {
    const { product, userId } = this.props;
    return (
      <li className={styles["list__item"]}>
        <Item product={product} userId={userId} />
      </li>
    );
  }
}
