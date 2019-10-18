import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './List.css';

class List extends React.Component {

    static propTypes = {
        products: PropTypes.array.isRequired
    };

    render() {
        const products = this.props.products;

        return (
            <ul className="products-list">
                {
                    products.map(product => {
                        return <Item key={product.product_id} product={product} />
                    })
                }
            </ul>
        )
    }
}

export default List;