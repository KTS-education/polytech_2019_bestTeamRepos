import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import User from "@components/User";
import Wishlist from "@components/Wishlist";
import NoResults from "@components/NoResults";
import Loader from "@components/Loader";
import { updateWishlist } from "@actions/updateGiftsList";
import { getListFromMe } from "@actions/booking";

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
    this.props.getListFromMe(JSON.parse(localStorage.getItem("state")));
  }

  filterFromMe = () => {
    const { id } = this.props.match.params;
    const { giftsListFromMe } = this.props;
    let numbId = parseInt(id);
    if (giftsListFromMe && giftsListFromMe.length) {
      return giftsListFromMe.filter(({ userId }) => {
        return userId === numbId;
      });
    }
  };

  render() {
    const { userId, giftsList, giftsListFromMe, isLoading, error } = this.props;
    const { id } = this.props.match.params;
    let numbId = parseInt(id);
    const filteredFromMe = this.filterFromMe();
    const isMyProfile = userId.vk_id === numbId;

    if (isLoading) return <Loader />;

    if (error) return <div>{error}</div>;

    return (
      <div className={styles["profile-container"]}>
        <User ids={id} />
        <Switch>
          <Route
            exact
            path={Routes.profile.createFromMe(id)}
            render={prop => (
              <>
                {isMyProfile ? (
                  giftsListFromMe && giftsListFromMe.length ? (
                    <Wishlist
                      targetId={numbId}
                      userId={userId}
                      products={giftsListFromMe}
                    />
                  ) : (
                    <NoResults children="Кажется, ты не любишь дарить подарки" />
                  )
                ) : filteredFromMe && filteredFromMe.length ? (
                  <Wishlist
                    targetId={numbId}
                    userId={userId}
                    products={filteredFromMe}
                  />
                ) : (
                  <NoResults children="Кажется, ты не любишь дарить подарки" />
                )}
              </>
            )}
          />
          <Route
            exact
            path={Routes.profile.create(id)}
            render={props => (
              <>
                {isMyProfile ? (
                  giftsList.length ? (
                    <Wishlist
                      products={giftsList}
                      currentUserId={userId.vk_id}
                    />
                  ) : (
                    <NoResults children="Кажется, ты не любишь дарить подарки" />
                  )
                ) : giftsList.length ? (
                  <Wishlist products={giftsList} currentUserId={numbId} />
                ) : (
                  <NoResults children="Кажется, друг не любит дарить подарки" />
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
      dispatch(updateWishlist(id, isFriend, userId)),
    getListFromMe: data => dispatch(getListFromMe(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
