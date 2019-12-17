import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "@components/List";

class Wishlist extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    currentUserId: PropTypes.number,
    className: PropTypes.string
  };
  render() {
    const { products } = this.props;
    return (
      <List products={products} currentUserId={this.props.currentUserId} />
    );
  }
}

export default Wishlist;
