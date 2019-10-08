import React from 'react';
import './SuggestionsListItem.css';
import MainButton from '../../../MainButton';
import PropTypes from 'prop-types';

class SuggestionsListItem extends React.Component {

    static propTypes = {
        suggestion: PropTypes.object.isRequired
    };

    render() {
        const { product_description, product_id, product_img_href, product_price, product_title } = this.props.suggestion;

        return (
            <li className="suggestionsListItem">
                 <img className="suggestionImage" src={product_img_href} alt={product_title}/>
                 <h3>{product_title}</h3> 
                 <p>{product_price}</p> 
                 <p>{product_description}</p>
                 <MainButton textButton={'Добавить в избранное'}/>
            </li>
        )
    }
}

export default SuggestionsListItem;