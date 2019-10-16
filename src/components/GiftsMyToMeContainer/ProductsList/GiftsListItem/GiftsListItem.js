import React from 'react';
import PropTypes from 'prop-types';
import MainButton from '@components/MainButton';
import ProductItem from '@components/ProductItem';
import giftIcon from '@img/giftIcon.png';
import './GiftsListItem.css';

class GiftsListItem extends React.Component {

    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        const product = this.props.product;
        
        if (product.booked) {
            return (
                <li className="gifts-list__item">
                     <ProductItem product={product} />
                     <div className="item__group">
                        <MainButton className="button--delete" children={'Удалить'}/>
                        <span className="booked"><img className="booked__gift-icon" src={giftIcon} /></span>
                     </div>
                     
                </li>
            )
        } else {
            return (
                <li className="gifts-list__item">
                     <ProductItem product={product} />
                     <MainButton className="button--delete" children={'Удалить'}/>
                </li>
            )
        }
    }
}

export default GiftsListItem;