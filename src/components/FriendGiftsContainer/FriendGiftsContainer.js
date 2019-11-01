import React, { Component } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import NoResults from "@components/NoResults";
import products from "@data/YourFriendGifts/mock.js";
import Routes from "@config/routes.js";
import List from "@components/List";

export class FriendGiftsContainer extends Component {
  render() {
    if (products.length) {
      return (
        <Switch>
          <Route exact path={Routes.Profile.path}>
            <List products={products} />
          </Route>

          <Route exact path={Routes.Profile.createFromMePath}>
            <List
              products={products.filter(
                product => product.isBookedByCurrentUser
              )}
            />
          </Route>
        </Switch>
      );
    }
    return <NoResults>Кажется, друг не любит подарки</NoResults>;
  }
}

export default FriendGiftsContainer;
