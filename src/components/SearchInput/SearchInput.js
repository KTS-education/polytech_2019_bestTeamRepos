import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./SearchInput.module.scss";

class SearchInput extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    handleInput: PropTypes.func,
    onChange: PropTypes.func,
    giftsList: PropTypes.array
  };

  static defaultProps = {
    children: null,
    handleInput: () => {},
    onChange: (...params) => {},
    giftsList: []
  };

  state = {
    input: ""
  };

  focusInput = node => {
    this._inputEl = node;
  };

  onChangeInput = e => {
    this.setState({ input: e.target.value }, () => {
      this.props.onChange(this.state.input);
    });
  };

  handleInput = e => {
    const { giftsList } = this.props;
    if (e.keyCode === 13) {
      if (giftsList.length) this.props.handleInput(this.state.input, giftsList);
      else this.props.handleInput(this.state.input);
    }
  };

  async componentDidMount() {
    this._inputEl.focus();
    this.setState({ searchSuggestions: this.props.searchSuggestions });
  }

  render() {
    console.log(this.state);
    const { children } = this.props;
    return (
      <input
        value={this.state.input}
        ref={this.focusInput}
        type="text"
        className={(styles["search"], styles["search__input-line"])}
        placeholder={children}
        onKeyUp={this.handleInput}
        onChange={this.onChangeInput}
      />
    );
  }
}

const mapStateToProps = ({ searchSuggestions }) => {
  return {
    ...searchSuggestions
  };
};

export default connect(mapStateToProps)(SearchInput);
