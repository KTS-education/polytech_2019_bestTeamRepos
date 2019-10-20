import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
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

  state = {
    path: `/myfriendspage/${this.props.accountInfoObject.id}`
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
            children={"Узнать, что подарить"}
            className={"button-learn"}
            to={this.state.path}
          />
          {/* <MainButton
            children={"Узнать, что подарить"}
            className={"button-learn"}
          /> */}
        </div>
      </div>
    );
  }
}

export default Friend;
