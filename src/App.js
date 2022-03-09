import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Services from "./component/services/Services";
import Contact from "./component/contact/Contact";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Footer from "./component/footer/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
