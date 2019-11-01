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
          path={Routes.Profile.path}
          render={props => <StatusButtonsMyPage isBooked={product.isBooked} />}
        />

        <Route
          exact
          path={Routes.Profile.createWhatIwantPath}
          render={props => (
            <StatusButtonsMyPageIwant src={product.selectedPersonPhotoHref} />
          )}
        />

        <Route // friend want
          exact
          path={Routes.Profile.createFromMePath}
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
          path={Routes.Profile.createFromMePath}
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
