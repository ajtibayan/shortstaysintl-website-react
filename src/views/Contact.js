import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./Contact.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const Contact = () => {
  const location = useLocation();
  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>Contact Page</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
