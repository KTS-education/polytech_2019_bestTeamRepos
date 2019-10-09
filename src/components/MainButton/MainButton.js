import React from "react";
import PropTypes from "prop-types";

import "./MainButton.css";

class MainButton extends React.Component {
  static propTypes = {
    textButton: PropTypes.string
  };

  static defaultProps = {
    textButton: "Главная кнопка"
  };

  render() {
    const { textButton } = this.props;

    return (
      <div className="ButtonContainer">
        <button className="ButtonContainer__Button">{textButton}</button>
      </div>
    );
  }
}

export default MainButton;
