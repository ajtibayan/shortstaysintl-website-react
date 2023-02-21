import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./TrainingAndCoaching.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const TrainingAndCoaching = () => {
  const location = useLocation();
  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="tncEvents">
          <div className="event1 event-container">
            <a href="#" className="event-image-container">
              {/* <h2>FREE Workshops</h2> */}
              <figure className="event-image">
                <picture>
                  <img src="/images/trainingandcoaching/freeWorkshops.png" />
                </picture>
              </figure>
            </a>
            <div className="eventDetails">
              <p>
                We provide monthly free workshops to support your short-term
                rental journey.
              </p>
              <div className="eventLearnMore-container">
                <a href="#" className="eventLearnMore">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="event2 event-container">
            <a href="#" className="event-image-container">
              {/* <h2>One-on-One Mentoring</h2> */}
              <figure className="event-image">
                <picture>
                  <img src="/images/trainingandcoaching/oneOnOne.png" />
                </picture>
              </figure>
            </a>
            <div className="eventDetails">
              <p>
                Let us help you generate immediate revenue by mentoring you on
                how to get your place ready and listed on Airbnb as we work
                towards your Superhost status.
              </p>
              <div className="eventLearnMore-container">
                <a href="#" className="eventLearnMore">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="event3 event-container">
            <a href="#" className="event-image-container">
              {/* <h2>Short-Term Rental Blueprint Course</h2> */}
              <figure className="event-image">
                <picture>
                  <img src="/images/trainingandcoaching/shortTerm.png" />
                </picture>
              </figure>
            </a>
            <div className="eventDetails">
              <p>
                Interested in learning more about our Short-Term Rental Blue
                Print 8 Week Course on how to take your short term rental
                business to the next level and operate like a true rental
                management company?
              </p>
              <div className="eventLearnMore-container">
                <a href="#" className="eventLearnMore">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TrainingAndCoaching;
