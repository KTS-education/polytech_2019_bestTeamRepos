import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";

import "./MyPage.css";

class MyPage extends React.Component {

    render() {
        return (
            <div className="my-page">
                <Header />
            </div>
        )
    }
}

export default MyPage;