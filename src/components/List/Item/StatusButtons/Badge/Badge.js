import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Badge.module.scss";

export default class Badge extends Component {
    static propTypes = {
        src: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node
    }

    static defaultProps = {
        src: null,
        className: null,
        children: null
    }

    render() {
        const { src, className, children } = this.props;
        return (
            <div className={classNames(styles["badge"], className)} tooltip={children}>
                <img className={styles["badge__img"]} src={src} alt="Icon" />
            </div>
        )
    }
}
