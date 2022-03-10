import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";
const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNow("#");
        }}
        className={activeNow === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNow("#about");
        }}
        className={activeNow === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNow("#experience");
        }}
        className={activeNow === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNow("#portfolio");
        }}
        className={activeNow === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNow("#contact");
        }}
        className={activeNow === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};
export default Nav;
