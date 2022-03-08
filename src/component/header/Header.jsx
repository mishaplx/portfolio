import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSorial from "./HeaderSorial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Misha Plehnevich</h1>
        <h5 className="text-light">JS Development</h5>
        <CTA />
        <HeaderSorial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
