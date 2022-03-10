import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" target="_blank" className="btn">GitHub</a>
            <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>  
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" target="_blank" className="btn">GitHub</a>
            <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div> 
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" target="_blank" className="btn">GitHub</a>
            <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div> 
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" target="_blank" className="btn">GitHub</a>
            <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div> 
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" target="_blank" className="btn">GitHub</a>
            <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
        </div> 
      </div>
    </section>
  ) 
};

export default Portfolio;
