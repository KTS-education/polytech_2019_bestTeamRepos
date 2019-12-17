import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchSuggestions from "@components/SearchSuggestions";
import { cancelSearchSuggestions } from "@actions/updateSearchSuggestions";

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
    input: "",
    _suggestionsEl: ""
  };

  createRefInput = node => {
    this._inputEl = node;
  };

  createRefSuggestions = node => {
    this._suggestionsEl = node;
  };

  onChangeInput = e => {
    this.setState({ input: e.target.value }, () =>
      this.props.onChange(this.state.input)
    );
  };

  onKeyUpEnter = e => {
    const { giftsList } = this.props;
    if (
      e.keyCode === 13 &&
      this.props.apiGetItems &&
      this.props.cancelSearchSuggestions
    ) {
      this.props.apiGetItems(this.state.input, giftsList);
      this.props.cancelSearchSuggestions();
    }
  };

  onClickSuggestion = input => {
    const { giftsList } = this.props;
    this.setState({ input: input }, () =>
      this.props.apiGetItems(this.state.input.toLowerCase(), giftsList)
    );
    this.props.cancelSearchSuggestions();
  };

  async componentDidMount() {
    this._inputEl.focus();
  }

  componentWillUnmount() {
    this.props.cancelSearchSuggestions();
  }

  render() {
    const { children } = this.props;
    const { searchSuggestions } = this.props;
    const { pages } = searchSuggestions;
    return (
      <div className={styles["search-container"]}>
        <input
          value={this.state.input}
          ref={this.createRefInput}
          type="text"
          className={(styles["search"], styles["search__input-line"])}
          placeholder={children}
          onKeyUp={this.onKeyUpEnter}
          onChange={this.onChangeInput}
        />
        {pages ? (
          <div className={styles["search-suggestions-wrapper"]}>
            <SearchSuggestions
              ref={this.createRefSuggestions}
              className={styles["search-suggestions"]}
              onClickSuggestion={this.onClickSuggestion}
              searchSuggestions={searchSuggestions}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ searchSuggestions }) => {
  return {
    ...searchSuggestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cancelSearchSuggestions: () => dispatch(cancelSearchSuggestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
