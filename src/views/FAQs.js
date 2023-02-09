import React from "react";

// Components and Styles
import MainNav from "../components/MainNav";
import "./FAQs.css";
import Main from "./Main";
import Footer from "./Footer";

const FAQs = () => {
  return (
    <>
      <MainNav />
      <Main />
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
