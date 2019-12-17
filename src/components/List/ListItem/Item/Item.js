import React from "react";
import PropTypes from "prop-types";
import StatusButtons from "./StatusButtons";
import styles from "./Item.module.scss";
import noPicture from "@img/noPicture.png";

export default class Item extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    userId: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { product, userId } = this.props;
    const { description, name, photo } = this.props.product;
    let url, price;
    if (photo) {
      if (typeof photo.url === "string") url = photo.url;
      else url = photo;
    }
    if (
      this.props.product.price.avg &&
      typeof this.props.product.price.avg === "string"
    )
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
        <StatusButtons product={product} targetId={userId} />
      </div>
    );
  }
}
