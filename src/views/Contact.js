import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

// Components and Styles
import "react-phone-input-2/lib/style.css";
import MainNav from "../components/MainNav";
import "./Contact.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const Contact = () => {
  const location = useLocation(),
    [socialMedia, setSocialMedia] = useState([]),
    form = useRef(),
    initValue = {
      name: "",
      phone: "",
      email: "",
      message: "",
      contactFormType: "cpForm",
    },
    [formVals, setFormVals] = useState(initValue),
    [formErrs, setFormErrs] = useState({}),
    [isSubmit, setIsSubmit] = useState(false),
    [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "http://ajtibayan.com/shortstaysintl/api/navigation"
      );
      const json = await response.json();

      if (response.ok) {
        setSocialMedia(json[0].socialMedia);
      }
    };

    fetchNavigationContent();
  }, []);

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      // console.log(formVals);
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormVals({ ...formVals, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrs(validate(formVals));
    setIsSubmit(true);
  };

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

    return errors;
  };

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="contactPg-main">
          <article className="article-wrapper">
            <div className="contactForm-txtContainer">
              <h2>Contact</h2>
              <p>
                Interested in learning more about our services and how we can
                save you time and money? Contact us for a 30 mins complimentary
                session to get started.
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:info@shortstaysintl.com">
                    info@shortstaysintl.com
                  </a>
                </li>
                <li>
                  Call: <a href="tel:647-886-0758">647-886-0758</a>
                </li>
              </ul>
              <div className="copywrite_container--social">
                {socialMedia.map(({ id, hrefLink, faIcon }) => {
                  return (
                    <a
                      href={hrefLink}
                      target="_blank"
                      rel="noreferrer"
                      key={id}
                    >
                      <span className="copywrite_container--social-icons">
                        <i className={faIcon}></i>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="contactForm-formContainer">
              {isSent && (
                <motion.h3
                  className="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  Successful Contact Form Submission!
                </motion.h3>
              )}
              <form className="form-layout" ref={form} onSubmit={handleSubmit}>
                <div className="input-name">
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
                <div className="input-phone">
                  <PhoneInput
                    country={"ca"}
                    containerStyle={{ padding: "0" }}
                    inputStyle={{
                      height: "52px",
                      border: "none",
                      background: "#f0f3f6",
                      borderRadius: "3px",
                    }}
                    buttonStyle={{ border: "none", background: "#f0f3f6" }}
                    className="input-text user-text-field"
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    required
                    value={formVals.value}
                    onChange={(phone) =>
                      setFormVals({ ...formVals, phone: phone })
                    }
                  />
                  {formErrs.phone && (
                    <motion.p
                      className="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {formErrs.phone}
                    </motion.p>
                  )}
                </div>
                <div className="input-email">
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
                <div className="input-address">
                  <textarea
                    className="input-textarea"
                    id="message"
                    name="message"
                    rows="10"
                    placeholder="Your Message"
                    value={formVals.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-btnSubmit">
                  <button className="cpSubmit" type="submit" value="submit">
                    <span className="submit-btn-text">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
