import React from "react";

import "./SearchInput.css";

class SearchInput extends React.Component {
  render() {
    return (
      <div className="Search">
        <input type="text" className="Search__Input-line"></input>
      </div>
    );
  }
}

export default SearchInput;
