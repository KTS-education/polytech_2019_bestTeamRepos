import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./SearchSuggestions.module.scss";

export default class SearchSuggestions extends Component {
  static propTypes = {
    searchSuggestions: PropTypes.object,
    onClickSuggestion: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    searchSuggestions: [],
    className: null
  };

  colorSuggestion = (input, page) => {
    let enteredPart = page.slice(0, input.length);
    let suggestedPart = page.slice(input.length);
    return (
      <>
        <span>{enteredPart}</span>
        <span className={styles["suggestedPart"]}>{suggestedPart}</span>
      </>
    );
  };

  render() {
    const {
      pages,
      input,
      // completions,
      className
    } = this.props.searchSuggestions;
    return (
      <ul
        className={classNames(
          styles["search-suggestions-container"],
          className
        )}
      >
        {pages.map(suggestion => (
          <li
            className={styles["search-suggestions__list-item"]}
            key={suggestion.url}
            onClick={() => this.props.onClickSuggestion(suggestion.value)}
          >
            {this.colorSuggestion(input.value, suggestion.value)}
          </li>
        ))}
      </ul>
    );
  }
}
