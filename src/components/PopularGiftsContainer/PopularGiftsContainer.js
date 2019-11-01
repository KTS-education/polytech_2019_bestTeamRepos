import React from "react";
import Loader from "@components/Loader";
import products from "@data/PopularProductsInfo/mock.js";
import SectionName from "./SectionName";
import List from "@components/List";

export default class PopularGiftsContainer extends React.Component {
  render() {
    if (products.length) {
      return (
        <div>
          <SectionName children="Популярное" />
          <List products={products} />
        </div>
      );
    }
    return <Loader />;
  }
}
