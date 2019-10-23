import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Item from "./Item";
import "./List.css";

class List extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string
  };
  defaultProps = { className: null };

  render() {
    const { products, className } = this.props;

    return (
      <ul className={classNames("products-list", className)}>
        {products.map(product => {
          return <Item key={product.product_id} product={product} />;
        })}
      </ul>
    );
  }
}

export default List;
