import React from "react";
import { Route } from "react-router-dom";
import UserAccountHeader from "@components/UserAccountHeader";
import GiftsMyToMeContainer from "@components/GiftsMyToMeContainer";
import GiftsFromMeContainer from "@components/GiftsFromMeContainer";
import "./MyPage.css";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="my-page-container">
        <Route path="/mypage" component={UserAccountHeader} />
        <Route exact path="/mypage" component={GiftsMyToMeContainer} />
        <Route exact path="/mypage/what-i-want" component={GiftsFromMeContainer} />
      </div>
    );
    // if (this.props.location.pathname.includes("/mypage")) {
    //   return (
    //     <div className="my-page-container">
    //       <UserAccountHeader />
    //       <GiftsMyToMeContainer />
    //     </div>
    //   );
    // }
    // if (this.props.location.pathname === "/mypage/what-i-want") {
    //   return (
    //     <div className="my-page-container">
    //       <UserAccountHeader />
    //     </div>
    //   );
    // }
  }
}

export default MyPage;
