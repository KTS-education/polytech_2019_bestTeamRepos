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

  async handleClick() {
    await this.addToMyList();
    await this.getMyWishlist();
  }

  addToMyList = async () => {
    const result = await api(`/api/wishlist/add`, "POST", {
      id: this.props.product.id,
      name: this.props.product.name,
      photo: this.props.product.photo.url,
      price: this.props.product.price.avg
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
  };

  getMyWishlist = async () => {
    const result = await api(`/api/wishlist/get`, "GET", {
      id: "5dda7278f79bd70001f9050a"
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
  };

  render() {
    return (
      <Button
        className={styles["item__button"]}
        children="Добавить в избранное"
        onClick={() => this.handleClick()}
      />
    );
  }
}
