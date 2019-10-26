import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NoResults from "@components/NoResults";
import products from "@data/ProductsInfo/mock.js";
import List from "@components/List";
import "./FriendGiftsContainer.css";

export class FriendGiftsContainer extends Component {

  getUserId = () => {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  }

  render() {
    const userId = this.getUserId();

    if (products.length) {
      return (
        <List products={products.filter(product => userId === product.selectedPersonId)} />
      );
    }
    return <NoResults children="Кажется, друг не любит подарки" />;
  }
}

export default withRouter(FriendGiftsContainer);
