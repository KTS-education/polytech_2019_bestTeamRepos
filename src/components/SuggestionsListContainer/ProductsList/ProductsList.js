import React from 'react';
import PropTypes from 'prop-types';
import SuggestionsListItem from './SuggestionsListItem';
import './ProductsList.css';

class ProductsList extends React.Component {
    
    static propTypes = {
        suggestions: PropTypes.array.isRequired
    };

    render() {
        const products = this.props.suggestions;

        return (
            <ul className="products-list">
                {  
                   products.map(product => {
                        return <SuggestionsListItem key={product.product_id} product={product}/>
                    })
                }
            </ul>
        )
    }
}

export default ProductsList;