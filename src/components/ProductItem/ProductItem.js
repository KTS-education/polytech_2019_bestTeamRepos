import React from "react";
import PropTypes from 'prop-types';
import "./ProductItem.css";

class ProductItem extends React.Component {

    static propTypes = {
        product: PropTypes.shape({
            product_description: PropTypes.string.isRequired,
            product_img_href: PropTypes.string.isRequired,
            product_price: PropTypes.number.isRequired,
            product_title: PropTypes.string.isRequired
        })
    };

    render() {
        const {product_description, product_img_href, product_price, product_title} = this.props.product;

        return (
            <div className="my-page-container">
              <img className="item__image" src={product_img_href} alt={product_title}/>
              <h3>{product_title}</h3> 
              <p>{product_price}<span> &#8381;</span></p> 
              <p>{product_description}</p>
            </div>
        )
    }
}

export default ProductItem;