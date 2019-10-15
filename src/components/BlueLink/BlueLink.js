import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import "./BlueLink.css";

class BlueLink extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    clicked: ""
  };

  handleClick() {
    this.setState({
      clicked: "current"
    });
  }

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
        activeClassName="current"
        onClick={this.handleClick}
      >
        {children}
      </NavLink>
    );
  }
}

export default BlueLink;
