import React from "react";
import "./Loader.css";
import LoaderImg from "@img/loader.png";

class Loader extends React.Component {
  render() {
    return (
      <div className="load-сontainer">
        <img
          src={LoaderImg}
          alt="Loading"
          className="load-container__img"
        ></img>
      </div>
    );
  }
}

export default Loader;
