import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// Components and Styles
import MainNav from "../components/MainNav";
import "./Home.css";
import Main from "./Main";
import Footer from "./Footer";
import OurServicesSection from "../components/home/OurServicesSection";
import LookingFor from "../components/home/LookingFor";
import Marketed from "../components/home/Marketed";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <MainNav />
      <Main />
      <div className="content-wrapper">
        <LookingFor />
        <OurServicesSection />
        <Marketed />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Home;
