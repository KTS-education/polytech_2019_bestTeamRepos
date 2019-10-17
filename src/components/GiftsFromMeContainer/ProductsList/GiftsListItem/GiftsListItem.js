import React from 'react';
import PropTypes from 'prop-types';
import SecondaryButton from '@components/SecondaryButton';
import WishItem from '@components/WishItem';
import pensiveFace from '@img/pensiveFace.png';
import './GiftsListItem.css';

class GiftsListItem extends React.Component {

    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        const product = this.props.product;
            return (
                <li className="gifts-list__item">
                     <WishItem product={product} />
                     <div className="item__group">
                        <SecondaryButton className="button--delete" children={<div className="text"><span>Не подарю</span><img src={pensiveFace} className="sad-emoji" /></div>}/>
                        <img className="booked" src={product.selectedPerson_photo_href} alt="selected friend"/>
                     </div>
                </li>
        )
    }
}

export default GiftsListItem;