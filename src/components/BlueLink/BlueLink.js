import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
      <a
        href={href}
        className={classNames("blueLink", className, this.state.clicked)}
        onClick={this.handleClick}
      >
        {children}
      </a>
    );
  }
}

export default BlueLink;
