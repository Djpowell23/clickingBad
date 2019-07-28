import React from "react";
import "./Navbar.css";
// import logo from "../img/GameLogo-white.png";

const Navbar = (props) => (
    <div className="nav-wrapper">
        {/* <a className="brand-logo">
            <img className="logo" alt="logo" src="#" />
        </a> */}
        <span className="score">Score: {props.score} </span>
    </div>
);

export default Navbar;