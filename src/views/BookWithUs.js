import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./BookWithUs.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const BookWithUs = () => {
  const location = useLocation();

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper aboutPg">
        <section className="section-wrapper">
          <h3>Book With Us</h3>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookWithUs;
