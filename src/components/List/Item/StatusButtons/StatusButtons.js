import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import StatusButtonsPopular from "./StatusButtonsPopular";
import StatusButtonsMyPage from "./StatusButtonsMyPage";
import StatusButtonsFriendPageFromMe from "./StatusButtonsFriendPageFromMe";
import StatusButtonsFriendPage from "./StatusButtonsFriendPage";
import Routes from "@config/routes.js";

class StatusButtons extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    targetId: PropTypes.number,
    className: PropTypes.string
  };

  render() {
    const { product, targetId } = this.props;
    const currentPageId = targetId;
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
                isBooked={
                  product.booked_by !== undefined ? product.booked_by : false
                }
                id={product.id}
              />
            ) : (
              <StatusButtonsFriendPage
                userId={currentPageId}
                productId={product.id}
                product={product}
                isBooked={product.booked_by !== undefined}
                isBookedByCurrentUser={isNaN(product.booked_by)}
                isFavouriteByCurrentUser={product.myFavourite !== undefined}
              />
            )
          }
        />

        <Route
          exact
          path={Routes.profile.createFromMePath}
          render={props => (
            <StatusButtonsFriendPageFromMe
              userId={this.props.profile.id}
              productId={product.productId}
              product={product}
              isBooked={product.booked_by !== undefined}
              isBookedByCurrentUser={isNaN(product.booked_by)}
              isFavouriteByCurrentUser={product.myFavourite !== undefined}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ userId, giftsList, profile }) => {
  return { ...userId, giftsList, ...profile };
};

export default connect(mapStateToProps)(StatusButtons);
