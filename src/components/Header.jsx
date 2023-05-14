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

        <ul className="header__links">
          <li>
            <a href="#" className="header__link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Careers
            </a>
          </li>
        </ul>

        <a href="#" className="btn btn__primary">
          Request Invite
        </a>
      </nav>
    </header>
  );
};

export default Header;
