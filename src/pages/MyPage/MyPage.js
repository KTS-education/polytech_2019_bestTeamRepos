import React from "react";
import { Route } from "react-router-dom";
import UserAccountHeader from "@components/UserAccountHeader";
import GiftsMyToMeContainer from "@components/GiftsMyToMeContainer";
import GiftsFromMeContainer from "@components/GiftsFromMeContainer";
import "./MyPage.css";

class MyPage extends React.Component {
  render() {
    return (
      <div className="my-page-container">
        <Route path="/mypage" component={UserAccountHeader} />
        <Route exact path="/mypage" component={GiftsMyToMeContainer} />
        <Route exact path="/mypage/what-i-want" component={GiftsFromMeContainer} />
      </div>
    );
  }
}

export default MyPage;
