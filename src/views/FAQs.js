import React from "react";
import { useLocation, Link } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./FAQs.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";
import QuesAndAnsAccordion from "../components/faqs/QuesAndAnsAccordion";
import { accordionGuestsContent, accordionOwnersContent } from "../data/FAQs";

const FAQs = () => {
  const location = useLocation();

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>Frequently Asked Questions</h2>
        </section>
        <section className="section-wrapper">
          <article className="article-qanda">
            <h3 className="owners-title">Property Owners</h3>
            <div className="qanda-text_container ownersText">
              {accordionOwnersContent.map((quesAndAns, index) => {
                return <QuesAndAnsAccordion {...quesAndAns} key={index} />;
              })}
            </div>
            <h3 className="guests-title">Guests</h3>
            <div className="qanda-text_container guestsText">
              {accordionGuestsContent.map((quesAndAns, index) => {
                return <QuesAndAnsAccordion {...quesAndAns} key={index} />;
              })}
            </div>
            <div className="qanda-img_container">
              <div className="qanda-img_wrapper">
                <img
                  src="/images/faqs/mai-transparent.png"
                  alt="Company principal Mai Nguyen"
                  width={406}
                  height={508}
                />
              </div>
              <div className="qanda-img_btn_container">
                <Link to="/Contact">
                  <span>INTERESTED?</span> CONTACT US NOW
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
