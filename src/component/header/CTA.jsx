import React from "react";
import CV from "../../assets/cv.md";
const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default Cta;
