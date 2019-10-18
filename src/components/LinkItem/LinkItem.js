import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import "./LinkItem.css";

class LinkItem extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    href: "/",
    children: "Ссылка куда-то",
    className: null
  };

  render() {
    const { href, children, className } = this.props;

    return (
      <NavLink
        to={href}
        className={classNames("blueLink", className)}
        exact
        activeClassName="selected"
      >
        {children}
      </NavLink>
    );
  }
}

export default LinkItem;
