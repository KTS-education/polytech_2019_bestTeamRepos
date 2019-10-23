import React from "react";
import PropTypes from "prop-types";
import WishItem from "./WishItem";
import styles from "./Item.module.scss";

class Item extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const product = this.props.product;
    return (
      <li className={styles["list__item"]}>
        <WishItem product={product} />
      </li>
    );
  }
}

export default Item;
