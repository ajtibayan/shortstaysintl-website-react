import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components and Styles
import "./MobileNav.css";
import { socialMedia as smLocal, mainNav as mnLocal } from "../data/Navigation";

const MobileNav = ({ sidebarVisibility, handleMainMenuClick }) => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      try {
        const response = await fetch(
          "https://ajtibayan.com/shortstaysintl/api/navigation"
        );
        const json = await response.json();

        if (response.ok) {
          setSocialMedia(json[0].socialMedia);
          setMainNav(json[1].mainNav);
        }
      } catch {
        setSocialMedia(smLocal);
        setMainNav(mnLocal);
      }
    };

    fetchNavigationContent();
  }, []);
  return (
    <div className="header-mobile">
      <div className="topbar-mobile">
        <div className="topbar-mobile--left">
          <ul className="topbar-mobile--social">
            {socialMedia.map(({ hrefLink, faIcon, name }) => {
              return (
                <li key={name}>
                  <a
                    href={hrefLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Check out our ${name} profile`}
                  >
                    <i className={faIcon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="topbar-mobile--right">
          {/* <a href="#">
            <FontAwesomeIcon icon="fa-circle-user" />
          </a> */}
        </div>
      </div>
      <div className="header-mobile-content">
        <div className="header-left">
          <Link to="/">
            <img
              src="/images/4.png"
              className="header-mobile--logo"
              alt="Short Stays International logo"
              width={375}
              height={139}
            />
          </Link>
        </div>
        <div className="header-right">
          <div className="bookWithUsBtn-container">
            <Link to="/BookWithUs" className="btn">
              Book With Us
            </Link>
          </div>
          <button
            className="header-mobile--bars-icon"
            onClick={handleMainMenuClick}
            aria-label="Open mobile menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div
            className={`header-mobile-sidebar ${
              sidebarVisibility ? "open" : ""
            }`}
          >
            <div className="header-mobile-sidebar_close-sidebar">
              <button
                onClick={handleMainMenuClick}
                aria-label="Close mobile menu"
              >
                <i className="fa-solid fa-times-circle"></i>
              </button>
            </div>
            <div className="header-mobile-sidebar_menu-container">
              <ul className="mobile-main-menu">
                {mainNav.map(({ linkTo, linkName }) => {
                  return (
                    <li key={linkName}>
                      <Link to={linkTo}>{linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
