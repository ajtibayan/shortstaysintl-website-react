import React from "react";

// Components and Styles
import MainNav from "../components/MainNav";
import "./About.css";
import Main from "./Main";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <MainNav />
      <Main />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>About Page</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
