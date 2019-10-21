import React from "react";
import PropTypes from "prop-types";
import StatusButtons from './StatusButtons';
import "./WishItem.css";

class WishItem extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      product_description: PropTypes.string.isRequired,
      product_img_href: PropTypes.string.isRequired,
      product_price: PropTypes.number.isRequired,
      product_title: PropTypes.string.isRequired,
      product_isBooked: PropTypes.bool,
      selectedPerson: PropTypes.string,
      selectedPerson_photo_href: PropTypes.string
    }),
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    product_isBooked: null,
    selectedPerson: null,
    selectedPerson_photo_href: null
  };

  render() {
    const {
      product_description,
      product_img_href,
      product_price,
      product_title
    } = this.props.product;

    return (
      <div className="wish-item-container">
        <img
          className="item__image"
          src={product_img_href}
          alt={product_title}
        />
        <h3>{product_title}</h3>
        <p>
          {product_price}
          <span> &#8381;</span>
        </p>
        <p className="item__description">{product_description}</p>
        <StatusButtons product={this.props.product} />
      </div>
    );
  }
}

export default WishItem;
