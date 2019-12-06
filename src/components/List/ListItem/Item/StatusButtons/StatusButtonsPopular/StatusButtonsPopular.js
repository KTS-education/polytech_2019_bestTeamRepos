import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { api } from "@src/api.js";
import styles from "./StatusButtonsPopular.module.scss";

export default class StatusButtonsPopular extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  handleClick = async () => {
    await this.addToMyList();
  };

  addToMyList = async () => {
    const result = await api(`/api/wishlist/add`, "POST", {
      id: this.props.product.id,
      name: this.props.product.name,
      photo:
        typeof this.props.product.photo === "object"
          ? this.props.product.photo.url
          : "",
      price: this.props.product.price.avg,
      description: this.props.product.description
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
  };

  render() {
    console.log(this.props.product);
    return (
      <Button className={styles["item__button"]} onClick={this.handleClick}>
        Добавить в избранное
      </Button>
    );
  }
}
