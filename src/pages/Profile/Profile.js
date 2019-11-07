import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import FriendGiftsContainer from "@components/FriendGiftsContainer";
import Routes from "@config/routes";
import styles from "./Profile.module.scss";

function Profile({ profile, friends }) {
  let { id } = useParams();
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

export default Profile;
