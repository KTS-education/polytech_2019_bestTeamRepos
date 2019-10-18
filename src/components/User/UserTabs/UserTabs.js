import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"

import BlueLink from "@components/BlueLink";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";

import './UserTabs.css';

class UserTabs extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: null
    };

    render() {
        return (
            <div className="text-part__buttons-group">
                <BlueLink
                    href="/mypage"
                    children={
                        <span className="buttons-group__button">
                            Хочу получить{" "}
                            <img
                                className="button__emoji"
                                src={relievedEmoji}
                                alt="relieved emoji"
                            />
                        </span>
                    }
                />
                <BlueLink
                    href="/mypage/what-i-want"
                    children={
                        <span className="buttons-group__button">
                            Хочу подарить{" "}
                            <img
                                className="button__emoji"
                                src={sunglassesEmoji}
                                alt="cool emoji with sunglasses"
                            />
                        </span>
                    }
                />
            </div>
        )
    }
}

export default withRouter(UserTabs);