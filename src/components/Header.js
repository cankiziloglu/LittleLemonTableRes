import React from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <Link className="logo" to="/"><img src={logo} alt="little lemon restaurant logo" /></Link>
        <Nav />
      </header>
    </div>
  );
}

export default Header;
