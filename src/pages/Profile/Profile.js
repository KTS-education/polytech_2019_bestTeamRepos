import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import User from "@components/User";
import MyGiftsContainer from "@components/MyGiftsContainer";
import FriendGiftsContainer from "@components/FriendGiftsContainer";
import Routes from "@config/routes";
import styles from "./Profile.module.scss";

export default function Profile(props) {
  let { id } = useParams();

  return (
    <div className={styles["my-page-container"]}>
      <Switch>
        <Route
          path={Routes.Profile.path}
          render={props => (
            <div>
              <User />
              <MyGiftsContainer />
            </div>
          )}
        />
        <Route
          path={Routes.Profile.createWhatIwant(id)}
          render={props => (
            <div>
              <User />
              <MyGiftsContainer />
            </div>
          )}
        />
        <Route
          path={Routes.Profile.createFromMe(id)}
          render={props => (
            <div>
              <User />
              <FriendGiftsContainer />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}
