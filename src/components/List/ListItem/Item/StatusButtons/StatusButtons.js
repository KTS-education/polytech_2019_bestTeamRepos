import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import StatusButtonsPopular from "./StatusButtonsPopular";
import StatusButtonsMyPage from "./StatusButtonsMyPage";
import StatusButtonsMyPageIwant from "./StatusButtonsMyPageIwant";
import StatusButtonsFriendPageFromMe from "./StatusButtonsFriendPageFromMe";
import StatusButtonsFriendPage from "./StatusButtonsFriendPage";

import Routes from "@config/routes.js";

export default class StatusButtons extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      isBooked: PropTypes.bool,
      selectedPersonPhotoHref: PropTypes.string,
      isBookedByCurrentUser: PropTypes.bool
    }),
    className: PropTypes.string
  };

  static defaultProps = {
    className: null,
    isBooked: null,
    selectedPersonPhotoHref: null,
    isBookedByCurrentUser: null
  };

  render() {
    const product = this.props.product;

    const currentPageId = 10000;
    const myProfileId = 10000;

    return (
      <Switch>
        <Route
          exact
          path={Routes.mainPage}
          render={props => <StatusButtonsPopular product={product} />}
        />

        <Route
          exact
          path={Routes.profile.path}
          render={props =>
            myProfileId === currentPageId ? (
              <StatusButtonsMyPage isBooked={product.isBooked} />
            ) : (
              <StatusButtonsFriendPage
                isBooked={product.isBooked}
                isBookedByCurrentUser={product.isBookedByCurrentUser}
                isFavouriteByCurrentUser={product.isFavouriteByCurrentUser}
              />
            )
          }
        />

        <Route
          exact
          path={Routes.profile.createFromMePath}
          render={props =>
            myProfileId === currentPageId ? (
              <StatusButtonsMyPageIwant src={product.selectedPersonPhotoHref} />
            ) : (
              <StatusButtonsFriendPageFromMe
                isBooked={product.isBooked}
                isBookedByCurrentUser={product.isBookedByCurrentUser}
                isFavouriteByCurrentUser={product.isFavouriteByCurrentUser}
              />
            )
          }
        />
      </Switch>
    );
  }
}
