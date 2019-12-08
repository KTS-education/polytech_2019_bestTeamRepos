import React from "react";
import PropTypes from "prop-types";
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
    this.setState({ input: e.target.value });
    this.props.onChange(e.target.value);
  };

  handleInput = e => {
    const { giftsList } = this.props;
    if (e.keyCode === 13) {
      if (giftsList.length) this.props.handleInput(this.state.input, giftsList);
      else this.props.handleInput(this.state.input);
    }
  };

  componentDidMount() {
    this._inputEl.focus();
  }

  render() {
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

export default SearchInput;
