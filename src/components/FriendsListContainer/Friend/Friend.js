import React from "react";
import PropTypes from "prop-types";
import MainButton from "@components/MainButton";
import "./Friend.css";

class Friend extends React.Component {
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
          />
        </div>
      </li>
    );
  }
}

export default Friend;
