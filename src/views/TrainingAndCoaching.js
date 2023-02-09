import React from "react";

// Components and Styles
import MainNav from "../components/MainNav";
import "./TrainingAndCoaching.css";
import Main from "./Main";
import Footer from "./Footer";

const TrainingAndCoaching = () => {
  return (
    <>
      <MainNav />
      <Main />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>Training & Coaching Page</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TrainingAndCoaching;
