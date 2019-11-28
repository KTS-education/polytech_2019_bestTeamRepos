import React from "react";
import Loader from "@components/Loader";
import products from "@data/PopularProductsInfo/mock.js";
import List from "@components/List";

export default class PopularGiftsContainer extends React.Component {
  render() {
    if (products.length) {
      return <List products={products} />;
    }
    return <Loader />;
  }
}
