import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchSuggestions extends Component {
  static propTypes = {
    searchSuggestions: PropTypes.array
  };

  static defaultProps = {
    searchSuggestions: []
  };

  render() {
    const { searchSuggestions } = this.props;
    return (
      <ul>
        {searchSuggestions.map(suggestion => (
          <li key={suggestion.url}>{suggestion.value}</li>
        ))}
      </ul>
    );
  }
}
