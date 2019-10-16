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
      <li className="friend-item">
        <img
          src={logoPath}
          className="friend-item__photo"
          alt="Friend pict"
        ></img>
        <div className="friend-item__text-part">
          <div className="text-part__ns">
            <p className="ns__txt">
              {name} {surname}
            </p>
          </div>
          <MainButton
            children={<span>Узнать, что подарить</span>}
            className={"button-learn"}
            actionHandler={this.routeChange}
          />
        </div>
      </li>
    );
  }
}

export default withRouter(Friend);
