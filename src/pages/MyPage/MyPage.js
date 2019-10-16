import React from "react";
import Header from "@components/Header";
import UserAccountHeader from "@components/UserAccountHeader";
import GiftsMyToMeContainer from "@components/GiftsMyToMeContainer";
import "./MyPage.css";

class MyPage extends React.Component {
    render() {
        return (
            <div className="my-page-container">
                <Header />
                <UserAccountHeader />
                <GiftsMyToMeContainer />
            </div>
        )
    }
}

export default MyPage;