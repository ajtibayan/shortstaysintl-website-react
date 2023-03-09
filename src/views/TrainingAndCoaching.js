import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Components and Styles
import MainNav from "../components/MainNav";
import "./TrainingAndCoaching.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const TrainingAndCoaching = () => {
  const location = useLocation(),
    form = useRef(),
    initValue = {
      name: "",
      email: "",
      eventOption: "",
      contactFormType: "tncEvents",
    },
    [formVals, setFormVals] = useState(initValue),
    [formErrs, setFormErrs] = useState({}),
    [isSubmit, setIsSubmit] = useState(false),
    [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormVals({ ...formVals, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrs(validate(formVals));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      const sendFormEmail = async () => {
        const response = await fetch(
          "http://ajtibayan.com/shortstaysintl/contactform",
          {
            method: "POST",
            body: JSON.stringify(formVals),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const json = await response.json();

        if (!response.ok) {
          console.log(json.error);
          setIsSubmit(false);
          setIsSent(false);
        }

        if (response.ok) {
          if (json.sent) {
            setFormVals(initValue);
            setIsSent(true);
            setFormErrs({});
            setIsSubmit(false);
          }
        }
      };

      sendFormEmail();
    }
  }, [formErrs, isSubmit]);

  useEffect(() => {
    if (isSent) {
      const msgSent = setTimeout(() => setIsSent(false), 5000);
      return () => clearTimeout(msgSent);
    }
  }, [isSent]);

  const validate = (vals) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!vals.name) {
      errors.name = "Name is required!";
    } else if (vals.name.length < 2) {
      errors.name = "Enter at least 2 characters!";
    }

    if (!vals.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(vals.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!vals.eventOption || vals.eventOption === 0) {
      console.log("No Event Selected");
      errors.eventOption = "Please select an Event!";
    }

    return errors;
  };

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="tncEvents">
          <div className="event1 event-container">
            <div className="event-image-container">
              {/* <h2>FREE Workshops</h2> */}
              <figure className="event-image">
                <picture>
                  <img
                    src="/images/trainingandcoaching/freeWorkshops.jpg"
                    alt="Presenter and attendees in a workshop"
                    width={1080}
                    height={1350}
                  />
                </picture>
              </figure>
            </div>
            <div className="eventDetails">
              <p>
                We provide monthly free workshops to support your short-term
                rental journey.
              </p>
              <div className="eventLearnMore-container">
                <a
                  href={"/TrainingAndCoaching#eventForm"}
                  className="eventLearnMore"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="event2 event-container">
            <div className="event-image-container">
              {/* <h2>One-on-One Mentoring</h2> */}
              <figure className="event-image">
                <picture>
                  <img
                    src="/images/trainingandcoaching/oneOnOne.jpg"
                    alt="Two people talking"
                    width={1080}
                    height={1350}
                  />
                </picture>
              </figure>
            </div>
            <div className="eventDetails">
              <p>
                Let us help you generate immediate revenue by mentoring you on
                how to get your place ready and listed on Airbnb as we work
                towards your Superhost status.
              </p>
              <div className="eventLearnMore-container">
                <a
                  href={"/TrainingAndCoaching#eventForm"}
                  className="eventLearnMore"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="event3 event-container">
            <div className="event-image-container">
              {/* <h2>Short-Term Rental Blueprint Course</h2> */}
              <figure className="event-image">
                <picture>
                  <img
                    src="/images/trainingandcoaching/shortTerm.jpg"
                    alt="Desktop computer"
                    width={1080}
                    height={1350}
                  />
                </picture>
              </figure>
            </div>
            <div className="eventDetails">
              <p>
                Interested in learning more about our Short-Term Rental Blue
                Print 8 Week Course on how to take your short term rental
                business to the next level and operate like a true rental
                management company?
              </p>
              <div className="eventLearnMore-container">
                <a
                  href={"/TrainingAndCoaching#eventForm"}
                  className="eventLearnMore"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* End of tncEvents section */}
        <section className="event-info-form_container" id="eventForm">
          <div className="section-wrapper">
            <div className="event-info-form_text">
              <h3>
                To be notified of all upcoming dates & details for workshops &
                course, fill out your info below
              </h3>
            </div>
            <div className="event-info-form_form-container">
              {isSent && (
                <motion.h3
                  className="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  Successful submission!
                </motion.h3>
              )}
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field_name">
                    <input
                      className="input-text user-text-field"
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      required
                      value={formVals.name}
                      onChange={handleChange}
                    />
                    {formErrs.name && (
                      <motion.p
                        className="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {formErrs.name}
                      </motion.p>
                    )}
                  </div>
                  <div className="form-field_email">
                    <input
                      className="input-text user-text-field"
                      type="text"
                      placeholder="Email"
                      id="email"
                      name="email"
                      required
                      value={formVals.email}
                      onChange={handleChange}
                    />
                    {formErrs.email && (
                      <motion.p
                        className="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {formErrs.email}
                      </motion.p>
                    )}
                  </div>
                  <div className="form-field_event-dropdown">
                    <select
                      id="eventOption"
                      name="eventOption"
                      className="select-event"
                      value={formVals.eventOption}
                      onChange={handleChange}
                    >
                      <option value="0">---Select Event---</option>
                      <option value="1">FREE Workshops</option>
                      <option value="2">One-on-One Mentoring</option>
                      <option value="3">Blueprint Course</option>
                    </select>
                    {formErrs.eventOption && (
                      <motion.p
                        className="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {formErrs.eventOption}
                      </motion.p>
                    )}
                  </div>
                  <div className="form-field_submit-btn">
                    <button
                      className="submit-event-option"
                      type="submit"
                      value="submit"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                      <span className="submit-btn-text">
                        Yes, Send Me More Info
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TrainingAndCoaching;
