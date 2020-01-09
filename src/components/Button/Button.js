import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import buttonTypes from "@config/buttonTypes.js";

import styles from "./Button.module.scss";

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(Object.values(buttonTypes))
  };

  static defaultProps = {
    children: "Кнопка",
    className: null,
    to: null,
    onClick: function() {},
    type: buttonTypes.primary
  };

  render() {
    const { children, className, to, onClick, type } = this.props;
    const Component = to ? NavLink : "button";
    const btnProps = to ? { to, onClick } : { onClick };
    return (
      <Component
        className={classNames(
          styles["button"],
          { [styles["button--main"]]: type === buttonTypes.primary },
          { [styles["button--secondary"]]: type === buttonTypes.secondary },
          { [styles["button--disabled"]]: type === buttonTypes.disabled },
          className
        )}
        {...btnProps}
      >
        {children}
      </Component>
    );
  }
}
