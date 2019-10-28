import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NoResults from "@components/NoResults";
import products from "@data/YourFriendGifts/mock.js";
import Routes from "@config/routes.js";
import List from "@components/List";
import "./FriendGiftsContainer.css";

export class FriendGiftsContainer extends Component {

  getUserId = () => {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  }

  render() {
    const userId = this.getUserId();

    if (products.length) {
      return (
        <Switch>

          <Route
            exact path={`${Routes.FriendPage}/${userId}`}>
            <List products={products} />
          </Route>

          <Route
            exact path={`${Routes.FriendPageFromMe}/${userId}`}>
            <List products={products.filter(product => product.isBookedByCurrentUser)} />
          </Route>

        </Switch>
      );
    }
    return <NoResults children="Кажется, друг не любит подарки" />;
  }
}

export default withRouter(FriendGiftsContainer);
