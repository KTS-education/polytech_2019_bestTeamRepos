import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./MainButton.css";

class MainButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: "Кнопка",
    className: null,
    to: null,
    onClick: function() {}
  };

  render() {
    const { children, className, to, onClick } = this.props;
    const Component = to ? NavLink : "button";
    const btnProps = to ? { to, onClick } : { onClick };
    return (
      <Component
        className={classNames("button", className)}
        children={children}
        {...btnProps}
      />
    );
  }
}

export default MainButton;
