import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="#" className="header__logo">
          <img src={logo} alt="easy bank logo" />
        </a>

        <a href="#" className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
