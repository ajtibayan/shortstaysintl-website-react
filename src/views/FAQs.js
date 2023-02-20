import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./FAQs.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const FAQs = () => {
  const location = useLocation();
  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>FAQs Page</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
