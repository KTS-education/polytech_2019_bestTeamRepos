import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import GiftsToMeContainer from "@components/GiftsToMeContainer";
import GiftsFromMeContainer from "@components/GiftsFromMeContainer";
import "./MyPage.css";

class MyPage extends React.Component {
  render() {
    return (
      <div className="my-page-container">
        <Route path="/mypage" component={User} />
        <Route exact path="/mypage" component={GiftsToMeContainer} />
        <Route exact path="/mypage/what-i-want" component={GiftsFromMeContainer} />
      </div>
    );
  }
}

export default MyPage;
