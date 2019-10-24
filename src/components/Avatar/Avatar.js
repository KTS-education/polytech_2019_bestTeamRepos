import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from './Avatar.module.scss';

export default class Avatar extends Component {
    static propTypes = {
        src: PropTypes.string,
        className: PropTypes.string
    }

    static defaultProps = {
        src: null,
        className: null
    }

    render() {
        const { src, className } = this.props;
        return (
            <img src={src} className={classNames("avatar", className)} alt="user's avatar" />
        )
    }
}
