import React from "react";
import PropTypes from "prop-types";
import StatusButtons from "./StatusButtons";
import styles from "./Item.module.scss";

export default class Item extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { description, name } = this.props.product;
    const { url } = this.props.product.photo;
    const { avg: price } = this.props.product.price;
    const { product } = this.props;

    return (
      <div className={styles["item"]}>
        <img className={styles["item__image"]} src={url} alt={name} />
        <h3>{name}</h3>
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
