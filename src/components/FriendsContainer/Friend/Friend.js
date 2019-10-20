import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import { withRouter } from "react-router-dom";
import "./Friend.css";

class Friend extends React.Component {
  static propTypes = {
    accountInfoObject: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      logoPath: PropTypes.string.isRequired
    })
  };

  routeChange = e => {
    e.preventDefault();
    const path = `/myfriendspage/${this.props.accountInfoObject.id}`;
    this.props.history.push(path);
  };

  render() {
    const { name, surname, logoPath } = this.props.accountInfoObject;

    return (
      <div className="friend-item">
        <img src={logoPath} className="friend-item__photo" alt="Friend pict" />
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
      </div>
    );
  }
}

export default withRouter(Friend);
