import React, { Component } from "react";
import PropTypes from "prop-types";
// import styles from "./TooltipList.module.scss";
// import products from "@data/PopularProductInfo";

export default class TooltipList extends Component {
  static propTypes = {
    matchValue: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    matchValue: null,
    className: null
  };

  render() {
    return <div className={classNames(className)}></div>;
  }
}
