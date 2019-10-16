import React from 'react';
import PropTypes from 'prop-types';
import MainButton from '@components/MainButton';
import ProductItem from '@components/ProductItem';
import './SuggestionsListItem.css';

class SuggestionsListItem extends React.Component {

    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        const product = this.props.product;

        return (
            <li className="suggestions-list__item">
                 <ProductItem product={product} />
                 <MainButton className="item__button" children={'Добавить в избранное'}/>
            </li>
        )
    }
}

export default SuggestionsListItem;