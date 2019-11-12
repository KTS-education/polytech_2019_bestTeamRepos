import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import FriendGiftsContainer from "@components/FriendGiftsContainer";
import { default as connectVK } from "@vkontakte/vk-connect";

import Routes from "@config/routes";

import styles from "./Profile.module.scss";

class Profile extends Component {
  // fetchProfile() {
  //   return connectVK
  //     .sendPromise("VKWebAppGetAuthToken", {
  //       app_id: 7186760,
  //       scope: "users, status"
  //     })
  //     .then(response => response.access_token)
  //     .then(token => {
  //       return connectVK.sendPromise("VKWebAppCallAPIMethod", {
  //         method: "users.get",
  //         request_id: "users",
  //         user_ids: 240949116,
  //         params: {
  //           fields: "photo_100",
  //           v: "5.103",
  //           access_token: token
  //         }
  //       });
  //     })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }

  componentDidMount() {
    // const { id } = this.props.match.params;
    // console.log(id);
    // const { profileLoaded } = this.props;
    // this.fetchProfile();
    // this.fetchProfile(id).then(profile => {
    //   profileLoaded(profile);
    // });
  }

  render() {
    const { profile, friends } = this.props;
    const { id } = this.props.match.params;

    const myProfileId = 10000;

    return (
      <div className={styles["profile-container"]}>
        <User profile={profile} friends={friends} />
        <Switch>
          <Route
            path={Routes.profile.path}
            render={props => (
              <>
                {myProfileId === parseInt(id) ? (
                  <MyGiftsContainer />
                ) : (
                  <FriendGiftsContainer />
                )}
              </>
            )}
          />
          <Route
            path={Routes.profile.createWhatIwant(id)}
            render={props => <MyGiftsContainer />}
          />
          <Route
            path={Routes.profile.createFromMe(id)}
            render={props => <FriendGiftsContainer />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ profile, friends }) => {
  return { ...profile, ...friends };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     profileLoaded: id =>
//       dispatch({
//         type: "PROFILE_LOADED",
//         payload: profile
//       })
//   };
// };

export default connect(mapStateToProps)(withRouter(Profile));
