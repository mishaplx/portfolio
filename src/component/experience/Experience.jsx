import React from "react";
import "./experience.css";
import { FiCheckCircle }  from "react-icons/fi";
const Experience = () => {
  return <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>HTML5</h4>
              <small className="small-light">Experienced</small>
            </div>
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>Css, Sass(Scss)</h4>
              <small className="small-light">Experienced</small>
            </div>
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>JavaScript</h4>
              <small className="small-light">Experienced</small>
            </div>    
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>TypeScript</h4>
              <small className="small-light">Experienced</small>
            </div>
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>Git</h4>
              <small className="small-light">Experienced</small>
            </div>
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>React</h4>
              <small className="small-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon" />
            <div>
              <h4>MySQL</h4>
              <small className="small-light">Basic</small>
            </div>
          </article>
          <article className="experience__default">
            <FiCheckCircle className="experience__default-icon"/>
            <div>
              <h4>Python</h4>
              <small className="small-light">Basic</small>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>;
};

export default Experience;
