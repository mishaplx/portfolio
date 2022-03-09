import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { SiPytest } from "react-icons/si";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiFillHome />
      </a>
      <a href="#about">
        <GrContactInfo />
      </a>
      <a href="#experience">
        <SiPytest />
      </a>
      <a href="#services">
        <GrServices />
      </a>
      <a href="#contact">
        <GrContactInfo />
      </a>
    </nav>
  );
};
export default Nav;
