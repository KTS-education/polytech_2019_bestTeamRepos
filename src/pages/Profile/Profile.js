import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import FriendGiftsContainer from "@components/FriendGiftsContainer";

import Routes from "@config/routes";

import styles from "./Profile.module.scss";

class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { userId } = this.props;
    const { id } = this.props.match.params;

    const myProfileId = this.props.userId.vk_id;
    let numbId = parseInt(id);

    return (
      <div className={styles["profile-container"]}>
        <User ids={id} />
        <Switch>
          <Route
            exact
            path={Routes.profile.createWhatIwant(id)}
            render={props => <MyGiftsContainer />}
          />
          <Route
            exact
            path={Routes.profile.createFromMe(id)}
            render={props => (
              <FriendGiftsContainer targetId={numbId} userId={userId} />
            )}
          />
          <Route
            path={Routes.profile.path}
            render={props => (
              <>
                {myProfileId === numbId ? (
                  <MyGiftsContainer />
                ) : (
                  <FriendGiftsContainer targetId={numbId} userId={userId} />
                )}
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ userId }) => {
  return { ...userId };
};

export default connect(mapStateToProps)(withRouter(Profile));
