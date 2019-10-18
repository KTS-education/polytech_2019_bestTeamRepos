import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import "./FriendPage.css";

class FriendPage extends React.Component {
    render() {
        return (
            <div className="my-page-container">
                <Route path="/myfriendspage" component={User} />
                {/* <Route exact path="/mypage" component={GiftsToMeContainer} /> */}
                {/* <Route exact path="/mypage/what-i-want" component={GiftsFromMeContainer} /> */}
            </div>
        );
    }
}

export default FriendPage;
