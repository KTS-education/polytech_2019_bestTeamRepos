import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Item from "./Item";

import styles from "./List.module.scss";

class List extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    currentUserId: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = { currentUserId: null, className: null };

  render() {
    const { products, className, currentUserId } = this.props;

    return (
      <ul className={classNames(styles["products-list"], className)}>
        {products.map(product => {
          return (
            <Item
              key={product.id || product.productId}
              product={product}
              userId={currentUserId}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
