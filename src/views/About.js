import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./About.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";
import AboutSSI from "../components/about/AboutSSI";
import OurStory from "../components/about/OurStory";
import OurMission from "../components/about/OurMission";
import OurValues from "../components/about/OurValues";

const About = () => {
  const location = useLocation();

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper aboutPg">
        <section className="section-wrapper">
          <AboutSSI />
          <OurStory />
          <OurMission />
          <OurValues />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
