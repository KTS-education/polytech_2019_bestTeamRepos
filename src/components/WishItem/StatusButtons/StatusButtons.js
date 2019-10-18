import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"
import SecondaryButton from '@components/SecondaryButton';
import MainButton from '@components/MainButton';
import giftIcon from "@img/giftIcon.png";
import pensiveFace from '@img/pensiveFace.png';
import popular from "@img/popular.png";
import './StatusButtons.css';

class StatusButtons extends React.Component {
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
        className: PropTypes.string
    };

    static defaultProps = {
        className: null,
        product_isBooked: null,
        selectedPerson: null,
        selectedPerson_photo_href: null
    };

    render() {
        const product = this.props.product;
        if (this.props.location.pathname === "/") {
            return (
                <div>
                    <MainButton className="item__button" children={<span>Добавить в избранное</span>} />
                </div>
            )
        }
        else if (this.props.location.pathname === "/mypage") {
            if (product.hasOwnProperty('product_isBooked') && product.product_isBooked) {
                return (
                    <div className="item__group">
                        <SecondaryButton className="button-delete" children={"Удалить"} />  <span className="booked">
                            <img className="booked__gift-icon" src={giftIcon} alt="Icon" />
                        </span>
                    </div>
                )
            } else {
                return (
                    <div>
                        <SecondaryButton className="button-delete" children={<span>Удалить</span>} />
                    </div>
                )
            }
        }
        else if (this.props.location.pathname === "/mypage/what-i-want") {
            return (
                <div className="item__group">
                    <SecondaryButton
                        className="button--delete"
                        children={<div className="text"><span>Не подарю</span><img src={pensiveFace} className="sad-emoji" /></div>} />
                    <img className="booked" src={product.selectedPerson_photo_href} alt="selected friend" />
                </div>
            )
        }
        else if (this.props.location.pathname === "/myfriendspage/from-me") {
            if (product.product_isBooked) {
                return (
                    <div className="item__group">
                        <SecondaryButton
                            className="button--delete"
                            children={<div className="text"><span>Не подарю</span><img src={pensiveFace} className="sad-emoji" /></div>}
                        />
                        <MainButton className="booked" children={popular} />
                    </div>
                )
            }
            else {
                return (
                    <div className="item__group">
                        <SecondaryButton
                            className="button--delete"
                            children={<div className="text"><span>Не подарю</span><img src={pensiveFace} className="sad-emoji" /></div>}
                        />
                    </div>
                )
            }
        }
        else if (this.props.location.pathname === "/myfriendspage") {
            // here /myfriendspage/what-friend-want
        }
    }
}

export default withRouter(StatusButtons);