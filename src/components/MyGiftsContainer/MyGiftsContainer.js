import React, { Component } from "react";
// import Loader from '@components/Loader';
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo/mock.js";
import List from "@components/List";
import "./MyGiftsContainer.css";

export class MyGiftsContainer extends Component {
  render() {
    if (products.length) {
      return (
        <div>
          <List products={products} />
        </div>
      );
    }
    return <NoResults text="Кажется, ты не любишь подарки" />;
  }
}

export default MyGiftsContainer;
