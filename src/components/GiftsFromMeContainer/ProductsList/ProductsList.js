import React from 'react';
import PropTypes from 'prop-types';
import GiftsListItem from './GiftsListItem';
import './ProductsList.css';

class ProductsList extends React.Component {
    
    static propTypes = {
        products: PropTypes.array.isRequired
    };

    render() {
        const products = this.props.products;

        return (
            <ul className="products-list">
                {  
                   products.map(product => {
                        return <GiftsListItem key={product.product_id} product={product}/>
                    })
                }
            </ul>
        )
    }
}

export default ProductsList;