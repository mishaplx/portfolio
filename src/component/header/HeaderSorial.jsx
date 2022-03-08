import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSorial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/mikhail-plehnevich-584b661b3/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/mishaplx" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSorial;
