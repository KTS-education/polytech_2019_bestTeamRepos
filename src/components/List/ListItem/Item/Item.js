import React from "react";
import PropTypes from "prop-types";
import StatusButtons from "./StatusButtons";
import styles from "./Item.module.scss";
// import { throwStatement } from "@babel/types";

class Item extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      description: PropTypes.string.isRequired,
      productImgHref: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }),
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { description, productImgHref, price, title } = this.props.product;
    const { product } = this.props;

    return (
      <div className={styles["item"]}>
        <img
          className={styles["item__image"]}
          src={productImgHref}
          alt={title}
        />
        <h3>{title}</h3>
        <p>
          {price}
          <span> &#8381;</span>
        </p>
        <p className={styles["item__description"]}>{description}</p>
        <StatusButtons product={product} />
      </div>
    );
  }
}

export default Item;
