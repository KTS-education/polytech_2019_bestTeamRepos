import React, { Component } from "react";
import List from "@components/List";

class Wishlist extends Component {
  render() {
    const { products } = this.props;
    return (
      <List products={products} currentUserId={this.props.currentUserId} />
    );
  }
}

export default Wishlist;
