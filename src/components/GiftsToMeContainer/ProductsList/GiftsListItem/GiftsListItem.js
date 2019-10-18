import React from "react";
import PropTypes from "prop-types";
import SecondaryButton from "@components/SecondaryButton";
import WishItem from "@components/WishItem";
import "./GiftsListItem.css";

class GiftsListItem extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const product = this.props.product;

    if (product.product_isBooked) {
      return (
        <li className="gifts-list__item">
          <WishItem product={product} />
        </li>
      );
    } else {
      return (
        <li className="gifts-list__item">
          <WishItem product={product} />
        </li>
      );
    }
  }
}

export default GiftsListItem;
