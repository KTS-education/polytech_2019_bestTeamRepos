import React, { Component } from "react";
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo/mock.js";
import List from "@components/List";

export default class MyGiftsContainer extends Component {
  render() {
    if (products.length) {
      return <List products={products} />;
    }
    return <NoResults>Кажется, ты не любишь подарки</NoResults>;
  }
}
