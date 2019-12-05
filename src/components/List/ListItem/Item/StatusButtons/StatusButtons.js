import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

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

    const currentPageId = this.props.userId.vk_id;
    const myProfileId = this.props.userId.vk_id;

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
              <StatusButtonsMyPage
                isBooked={product.isBooked}
                id={product.id}
              />
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

const mapStateToProps = ({ userId }) => {
  return { ...userId };
};

export default connect(mapStateToProps)(StatusButtons);
