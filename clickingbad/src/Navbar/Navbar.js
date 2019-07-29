import React from "react";
import "./Navbar.css";
// import logo from "../img/GameLogo-white.png";

const Navbar = (props) => (
    <div className="nav-wrapper">
        <h4 className="center">Clicking Bad</h4>
        <span className="score">Score: {props.score} </span>
    </div>
);

export default Navbar;