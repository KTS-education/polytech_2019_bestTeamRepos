import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./SecondaryButton.css";

class SecondaryButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    actionHandler: PropTypes.func
  };

  static defaultProps = {
    children: "Кнопка",
    className: null
  };

  render() {
    const { children, className, actionHandler } = this.props;

    return (
      <button
        className={classNames("sec-button", className)}
        onClick={actionHandler}
      >
        {children}
      </button>
    );
  }
}

export default SecondaryButton;
