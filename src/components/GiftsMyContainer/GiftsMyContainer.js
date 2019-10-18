import React, { Component } from "react";
// import Loader from '@components/Loader';
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo2/mock.js";
import List from "./List";
import "./GiftsMyContainer.css";

export class GiftsMyContainer extends Component {
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

export default GiftsMyContainer;
