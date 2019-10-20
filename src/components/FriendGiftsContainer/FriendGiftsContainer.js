import React, { Component } from "react";
// import Loader from '@components/Loader';
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo/mock.js";
import List from "@components/List";
import "./FriendGiftsContainer.css";

export class FriendGiftsContainer extends Component {
  render() {
    if (products.length) {
      return (
        <div>
          <List products={products} />
        </div>
      );
    }
    return <NoResults children="Кажется, друг не любит подарки" />;
  }
}

export default FriendGiftsContainer;
