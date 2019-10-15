import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import { withRouter } from "react-router-dom";
import "./Friend.css";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(e) {
    e.preventDefault();
    let path = "/myfriendspage";
    this.props.history.push(path);
  }

  static propTypes = {
    AccountInfoObject: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      logoPath: PropTypes.string
    })
  };

  render() {
    const { name, surname, logoPath } = this.props.AccountInfoObject;

    return (
      <li className="friendItem">
        <img
          src={logoPath}
          className="friendItem__Photo"
          alt="Friend pict"
        ></img>
        <div className="friendItem__textPart">
          <div className="friendItem__textPart__Ns">
            <p className="friendItem__textPart__Ns__txt">
              {name} {surname}
            </p>
          </div>
          <MainButton
            children={<p className="buttonSize_txt">Узнать что подарить</p>}
            className={"buttonSize"}
            actionHandler={this.routeChange}
          />
        </div>
      </li>
    );
  }
}

export default withRouter(Friend);
