import React from "react";
import PropTypes from "prop-types";
import SecondaryButton from "@components/SecondaryButton";
import WishItem from "@components/WishItem";
import giftIcon from "@img/giftIcon.png";
import "./GiftsListItem.css";

class GiftsListItem extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const product = this.props.product;

    if (product.product_isBooked) {
      return (
        <li className="gifts-list__item">
          <WishItem product={product} />
          <div className="item__group">
            <SecondaryButton className="button-delete" children={"Удалить"} />
            <span className="booked">
              <img className="booked__gift-icon" src={giftIcon} alt="Icon" />
            </span>
          </div>
        </li>
      );
    } else {
      return (
        <li className="gifts-list__item">
          <WishItem product={product} />
          <SecondaryButton
            className="button-delete"
            children={<span>Удалить</span>}
          />
        </li>
      );
    }
  }
}

export default GiftsListItem;
