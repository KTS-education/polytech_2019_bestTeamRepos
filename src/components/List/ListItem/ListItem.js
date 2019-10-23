import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import styles from "./ListItem.module.scss";

class ListItem extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const product = this.props.product;
    return (
      <li className={styles["list__item"]}>
        <Item product={product} />
      </li>
    );
  }
}

export default ListItem;
