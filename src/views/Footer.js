import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNav } from "../NavContext";

// Components and Styles
import "./Footer.css";
import SocialIconsNav from "../components/SocialIconsNav";
import MainLogo from "../components/MainLogo";

const Footer = () => {
  const { socialMedia, mainNav } = useNav();
  const curDate = new Date(),
    form = useRef(),
    initValue = {
      name: "",
      email: "",
      contactFormType: "footerForm",
    },
    [formVals, setFormVals] = useState(initValue),
    [formErrs, setFormErrs] = useState({}),
    [isSubmit, setIsSubmit] = useState(false),
    [isSent, setIsSent] = useState(false);
  let year = curDate.getFullYear();

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      // console.log(formVals);
      const sendFormEmail = async () => {
        const response = await fetch(
          "https://ajtibayan.com/shortstaysintl/contactform",
          {
            method: "POST",
            body: JSON.stringify(formVals),
            headers: {
              "Content-Type": "application/json",
            },
          },
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
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_container--col1">
            <MainLogo />
            <div className="footer_container--col1-text">
              <p>
                Talk to one of our short-term rental management pros to help you
                maximize your rental income.
              </p>
            </div>
          </div>
          <div className="footer_container--col2">
            <div className="footer_container--col-wrapper">
              <h3 className="footer_container--h3">Explore</h3>
              <ul className="footer_container--footer-menu">
                {mainNav.map(({ id, linkTo, linkName }, index) => {
                  return (
                    <li key={index}>
                      <Link to={linkTo}>{linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer_container--col3">
            <div className="footer_container--col-wrapper">
              <h3 className="footer_container--h3">
                Sign Up to get monthly updates from Short Stays International
              </h3>
              {isSent && (
                <motion.h3
                  className="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  Successful Subscribe Form Submission!
                </motion.h3>
              )}
              <form
                ref={form}
                className="flex-column footer-form flex"
                onSubmit={handleSubmit}
              >
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
                <div className="input-btnSubmit">
                  <button className="cpSubmit" type="submit" value="submit">
                    <span className="submit-btn-text">Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <section className="copywrite">
        <div className="copywrite_container">
          <div className="copywrite_container--text">
            <p>
              &copy; Copyright {year} Short Stays International. Developed by
              <a
                href="http://www.ajtibayan.com"
                target="_blank"
                rel="noreferrer"
              >
                A.J. Tibayan
              </a>
            </p>
          </div>
          <ul className="copywrite_container--social">
            {socialMedia.map((smNavInfo, index) => {
              return (
                <SocialIconsNav {...smNavInfo} key={index}>
                  <span className="copywrite_container--social-icons">
                    <i className={smNavInfo.faIcon}></i>
                  </span>
                </SocialIconsNav>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
