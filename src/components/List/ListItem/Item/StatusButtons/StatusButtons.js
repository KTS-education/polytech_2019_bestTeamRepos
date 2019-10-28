import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";
import StatusButtonsPopular from "./StatusButtonsPopular";
import StatusButtonsMyPage from "./StatusButtonsMyPage";
import StatusButtonsMyPageIwant from "./StatusButtonsMyPageIwant";
import StatusButtonsFriendPageFromMe from "./StatusButtonsFriendPageFromMe";
import StatusButtonsFriendPage from "./StatusButtonsFriendPage";
import Routes from "@config/routes.js";
import styles from "./StatusButtons.module.scss";

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
  }

  render() {
    const product = this.props.product;
    return (
      <Switch>
        <Route
          exact path={Routes.MainPage}>
          <StatusButtonsPopular />
        </Route>

        <Route
          exact path={Routes.MyPage}>
          <StatusButtonsMyPage isBooked={product.isBooked} />
        </Route>

        <Route
          exact path={Routes.MyPageIwant}>
          <StatusButtonsMyPageIwant
            src={product.selectedPersonPhotoHref} />
        </Route>

        <Route
          exact path={`${Routes.FriendPage}/${this.getUserId()}`}>
          <StatusButtonsFriendPage
            isBooked={product.isBooked}
            isBookedByCurrentUser={product.isBookedByCurrentUser}
            isFavouriteByCurrentUser={product.isFavouriteByCurrentUser} />
        </Route>

        <Route
          exact path={`${Routes.FriendPageFromMe}/${this.getUserId()}`}>
          <StatusButtonsFriendPageFromMe
            isBooked={product.isBooked}
            isBookedByCurrentUser={product.isBookedByCurrentUser}
            isFavouriteByCurrentUser={product.isFavouriteByCurrentUser} />
        </Route>

      </Switch>
    )
  }
}

export default withRouter(StatusButtons);
