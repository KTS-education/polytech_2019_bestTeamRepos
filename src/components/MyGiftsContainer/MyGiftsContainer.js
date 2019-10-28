import React, { Component } from "react";
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo/mock.js";
import List from "@components/List";
// import styles from "./MyGiftsContainer.module.scss";

export class MyGiftsContainer extends Component {
  render() {
    if (products.length) {
      return <List products={products} />;
    }
    return <NoResults children="Кажется, ты не любишь подарки" />;
  }
}

export default MyGiftsContainer;
