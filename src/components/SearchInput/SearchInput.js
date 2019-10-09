import React from "react";
// import PropTypes from 'prop-types';

import "./SearchInput.css";

class SearchInput extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Search">
        <input type="text" className="Search__Input-line"></input>
      </div>
    );
  }
}

export default SearchInput;
