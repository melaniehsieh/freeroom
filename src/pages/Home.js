import React from "react";
import DateTime from "../components/DateTime";
import Logo from "../assets/logo.png";
import "./styles.css";
import Campus from "./Campus";
import Period from "./Period";
import Rooms from "./Rooms";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img src={Logo} alt="logo" />
          <h1>Free Room?</h1>
        </div>
        <DateTime />
        <Campus />
        <Period />
        <Rooms />
      </div>
    );
  }
}

export default Home;
