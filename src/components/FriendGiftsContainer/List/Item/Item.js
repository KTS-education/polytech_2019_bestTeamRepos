import React from "react";
import PropTypes from "prop-types";
import WishItem from "@components/WishItem";
import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const product = this.props.product;
    return (
      <li className="gifts-list__item">
        <WishItem product={product} />
      </li>
    );
  };
}

export default Item;
