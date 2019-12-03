import React, { Component } from "react";
import Button from "@components/Button";
import styles from "./StatusButtonsPopular.module.scss";

export default class StatusButtonsPopular extends Component {
  // onClick = async () => {
  //   const result = await api(`/api/wishlist/add`, "POST", {
  //     id: product.Integer((required = True)),
  //     price: product.Integer((required = True)),
  //     name: product.String((required = True)),
  //     photo: product.String((required = True)),

  //     link: product.String(),
  //     rating: product.Float(),
  //     review_count: product.Integer(),
  //     base_price: product.Integer(),
  //     discount: product.Integer()
  //   });

  //   if (result) {
  //     console.log(result);
  //   } else {
  //     console.log(result);
  //   }
  // };

  render() {
    return (
      <Button
        className={styles["item__button"]}
        children="Добавить в избранное"
        onClick={this.onClick}
      />
    );
  }
}
