import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./Footer.css";

// Assets
import { socialMedia, mainNav } from "../data/Navigation";

const Footer = () => {
  const curDate = new Date();
  let year = curDate.getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_container--col1">
            <Link to="/" className="footer_container--logo-link">
              <img src="/images/4.png" className="footer_container--logo" />
            </Link>
            <div className="footer_container--col1-text">
              <p>
                Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="footer_container--col2">
            <div className="footer_container--col-wrapper">
              <h3 className="footer_container--h3">Explore</h3>
              <ul className="footer_container--footer-menu">
                {mainNav.map(({ id, linkTo, linkName }) => {
                  return (
                    <li key={id}>
                      <Link to={linkTo}>{linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer_container--col3">
            <div className="footer_container--col-wrapper">
              <h3 className="footer_container--h3">Account</h3>
            </div>
          </div>
          <div className="footer_container--col4">
            <div className="footer_container--col-wrapper">
              <h3 className="footer_container--h3">Newsletter</h3>
            </div>
          </div>
        </div>
      </footer>
      <section className="copywrite">
        <div className="copywrite_container">
          <div className="copywrite_container--text">
            <p>&copy; Copyright {year} Short Stays International</p>
          </div>
          <div className="copywrite_container--social">
            {socialMedia.map(({ id, hrefLink, faIcon }) => {
              return (
                <a href={hrefLink} key={id}>
                  <span className="copywrite_container--social-icons">
                    <FontAwesomeIcon icon={faIcon} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
