import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import FriendGiftsContainer from "@components/FriendGiftsContainer";
import connectVK from "@vkontakte/vk-connect";

import Routes from "@config/routes";

import styles from "./Profile.module.scss";

class Profile extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    profileLoaded: PropTypes.func.isRequired
  };

  fetchProfile(id) {
    return connectVK
      .sendPromise("VKWebAppGetAuthToken", {
        app_id: 7210429,
        scope: "friends, status"
      })
      .then(response => response.access_token)
      .then(token => {
        return connectVK.sendPromise("VKWebAppCallAPIMethod", {
          method: "users.get",
          request_id: "users_test",
          params: {
            user_ids: id,
            fields: "photo_200",
            v: "5.103",
            access_token: token
          }
        });
      })
      .then(response => response.response[0])
      .catch(error => console.log(error));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { profileLoaded } = this.props;
    this.fetchProfile(id).then(profile => {
      profileLoaded(profile);
    });
  }

  render() {
    const { profile, userId } = this.props;
    const { id } = this.props.match.params;
    const myProfileId = this.props.userId.vk_id;

    let numbId = parseInt(id);

    return (
      <div className={styles["profile-container"]}>
        <User profile={profile} />
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

const mapStateToProps = ({ profile, userId }) => {
  return { ...profile, ...userId };
};

const mapDispatchToProps = dispatch => {
  return {
    profileLoaded: payload =>
      dispatch({
        type: "PROFILE_LOADED",
        payload
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
