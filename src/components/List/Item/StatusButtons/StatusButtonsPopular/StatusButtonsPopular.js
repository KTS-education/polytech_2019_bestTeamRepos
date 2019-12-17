import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { connect } from "react-redux";
import { addToMyList } from "@actions/updateGiftsList";

class StatusButtonsPopular extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "primary", used: false, text: "Добавить в избранное" };
  }
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  handleClick = async () => {
    if (!this.state.used) {
      this.setState({
        type: "disabled",
        used: true,
        text: "Добавлено в избранное"
      });
      await this.props.addToMyList(this.props.product);
    }
  };

  render() {
    if (this.props.product.isWanted)
      return <Button type="disabled">Уже в избранном</Button>;

    return (
      <Button onClick={this.handleClick} type={this.state.type}>
        {this.state.text}
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToMyList: product => dispatch(addToMyList(product))
  };
};

export default connect(null, mapDispatchToProps)(StatusButtonsPopular);
