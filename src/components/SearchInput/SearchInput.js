import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.module.scss";

class SearchInput extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    handleInput: PropTypes.func
  };

  static defaultProps = {
    children: null,
    handleInput: () => {}
  };

  state = {
    input: ""
  };

  focusInput = node => {
    this._inputEl = node;
  };

  onChangeInput = e => {
    this.setState({ input: e.target.value });
  };

  handleInput = e => {
    if (e.keyCode === 13) {
      this.props.handleInput(this.state.input);
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
