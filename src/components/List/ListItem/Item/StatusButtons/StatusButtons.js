import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";

import StatusButtonsPopular from "./StatusButtonsPopular";
import StatusButtonsMyPage from "./StatusButtonsMyPage";
import StatusButtonsMyPageIwant from "./StatusButtonsMyPageIwant";
import StatusButtonsFriendPageFromMe from "./StatusButtonsFriendPageFromMe";
import StatusButtonsFriendPage from "./StatusButtonsFriendPage";

import Routes from "@config/routes.js";

class StatusButtons extends React.Component {
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

  getUserId = () => {
    if (this.props.location.pathname.includes("/myfriendspage")) {
      return parseInt(this.props.location.pathname.slice(-1));
    }
  };

  render() {
    const product = this.props.product;
    return (
      <Switch>
        <Route
          exact
          path={Routes.MainPage}
          render={props => <StatusButtonsPopular />}
        />

        <Route
          exact
          path={Routes.MyPage}
          render={props => <StatusButtonsMyPage isBooked={product.isBooked} />}
        />

        <Route
          exact
          path={Routes.MyPageIwant}
          render={props => (
            <StatusButtonsMyPageIwant src={product.selectedPersonPhotoHref} />
          )}
        />

        <Route
          exact
          path={Routes.FriendPage}
          render={props => (
            <StatusButtonsFriendPage
              isBooked={product.isBooked}
              isBookedByCurrentUser={product.isBookedByCurrentUser}
              isFavouriteByCurrentUser={product.isFavouriteByCurrentUser}
            />
          )}
        />

        <Route
          exact
          path={Routes.FriendPageFromMe}
          render={props => (
            <StatusButtonsFriendPageFromMe
              isBooked={product.isBooked}
              isBookedByCurrentUser={product.isBookedByCurrentUser}
              isFavouriteByCurrentUser={product.isFavouriteByCurrentUser}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(StatusButtons);
