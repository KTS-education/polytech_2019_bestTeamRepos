import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./MainButton.css";

class MainButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    children: "Кнопка",
    className: null
  };

  render() {
    const { children, className } = this.props;

    return (
      <button className={classNames("Button", className)}>{children}</button>
    );
  }
}

export default MainButton;
