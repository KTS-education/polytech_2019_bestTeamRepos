import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from './Avatar.module.scss';

export default class Avatar extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className: null
    }

    render() {
        const { src, className } = this.props;

        return (
            <img src={src} className={classNames("avatar", className)} alt="user's avatar" />
        )
    }
}
