import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

class List extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string
  };
  static defaultProps = { className: null };
  constructor(props) {
    super(props);
    this.deleteItemFunc = this.deleteItemFunc.bind(this);
    this.state = { id: null };
  }

  deleteItemFunc(productId) {
    console.log("DONE");
  }

  render() {
    const { products, className } = this.props;

    return (
      <ul className={classNames(styles["products-list"], className)}>
        {products.map(product => {
          return <ListItem key={product.id} product={product} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ deleteItem }) => {
  return {
    ...deleteItem
  };
};

export default connect(mapStateToProps)(List);
