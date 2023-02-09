import React from "react";

// Components and Styles
import MainNav from "../components/MainNav";
import "./Contact.css";
import Main from "./Main";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <MainNav />
      <Main />
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
