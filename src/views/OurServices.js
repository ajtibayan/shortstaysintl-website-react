import React from "react";

// Components and Styles
import MainNav from "../components/MainNav";
import "./OurServices.css";
import Main from "./Main";
import Footer from "./Footer";

const OurServices = () => {
  return (
    <>
      <MainNav />
      <Main />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>Our Services Page</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OurServices;
