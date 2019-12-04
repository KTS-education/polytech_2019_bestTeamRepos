import React from "react";
import PropTypes from "prop-types";
import StatusButtons from "./StatusButtons";
import styles from "./Item.module.scss";
import noPicture from "@img/noPicture.png";

export default class Item extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { product } = this.props;
    const { description, name } = this.props.product;
    let url, price;
    if (this.props.product.photo) {
      if (typeof this.props.product.photo.url === "string")
        url = this.props.product.photo.url;
      else url = this.props.product.photo;
    }
    if (typeof this.props.product.price.avg === "string")
      price = this.props.product.price.avg;
    else price = this.props.product.price;

    return (
      <div className={styles["item"]}>
        <img
          className={styles["item__image"]}
          src={url || noPicture}
          alt={name}
        />
        <h3 className={styles["item__name"]}>{name}</h3>
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
