import React from "react";

import "./SearchInput.css";

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="search__input-line"></input>
      </div>
    );
  }
}

export default SearchInput;
