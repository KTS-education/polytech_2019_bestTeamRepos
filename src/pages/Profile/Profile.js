import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import User from "@components/User";
import Wishlist from "@components/Wishlist";
import { updateWishlist } from "@actions/updateGiftsList";

import Routes from "@config/routes";

import styles from "./Profile.module.scss";

class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  async componentDidMount() {
    const { userId } = this.props;
    const { id } = this.props.match.params;
    let numbId = parseInt(id);

    if (numbId === userId.vk_id) {
      this.props.updateWishlist(userId.api_id);
    } else {
      await this.props.updateWishlist(numbId, true, userId.api_id);
    }
  }

  render() {
    const { userId, giftsList, giftsListFromMe } = this.props;
    const { id } = this.props.match.params;
    let numbId = parseInt(id);

    return (
      <div className={styles["profile-container"]}>
        <User ids={id} />
        <Switch>
          <Route
            exact
            path={Routes.profile.createWhatIwant(id)}
            render={prop => (
              <Wishlist
                targetId={numbId}
                userId={userId}
                products={giftsListFromMe}
              />
            )}
          />
          <Route
            exact
            path={Routes.profile.createFromMe(id)}
            render={prop => (
              <Wishlist
                targetId={numbId}
                userId={userId}
                products={giftsListFromMe}
              />
            )}
          />
          <Route
            path={Routes.profile.create(id)}
            render={props => (
              <>
                {userId.vk_id === numbId ? (
                  <Wishlist products={giftsList} currentUserId={userId.vk_id} />
                ) : (
                  <Wishlist products={giftsList} currentUserId={numbId} />
                )}
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ userId, giftsList, giftsListFromMe }) => {
  return { ...userId, ...giftsList, ...giftsListFromMe };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWishlist: (id, isFriend, userId) =>
      dispatch(updateWishlist(id, isFriend, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
