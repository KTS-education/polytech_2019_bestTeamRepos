import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";
import GroupButtons from "./GroupButtons";
import Routes from "@config/routes.js";
import "./StatusButtons.css";

class StatusButtons extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      isBooked: PropTypes.bool,
      selectedPerson: PropTypes.string,
      selectedPersonPhotoHref: PropTypes.string,
      selectedPersonId: PropTypes.number
    }),
    className: PropTypes.string
  };

  static defaultProps = {
    className: null,
    isBooked: null,
    selectedPerson: null,
    selectedPersonPhotoHref: null,
    selectedPersonId: null
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
          <GroupButtons popularItem={true} />
        </Route>

        <Route
          exact path={Routes.MyPage}>
          <GroupButtons isBooked={product.isBooked} />
        </Route>

        <Route
          exact path={Routes.MyPageIwant}>
          <GroupButtons src={product.selectedPersonPhotoHref} />
        </Route>

        <Route
          exact path={`${Routes.FriendPageFromMe}/${this.getUserId()}`}>
          <GroupButtons isBooked={product.isBooked} selectedPersonId={product.selectedPersonId} />
        </Route>

        <Route
          exact path={`${Routes.FriendPage}/${this.getUserId()}`}>
          <GroupButtons isBooked={product.isBooked} selectedPersonId={product.selectedPersonId} />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(StatusButtons);
