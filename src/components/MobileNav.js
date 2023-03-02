import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./MobileNav.css";

// Assets
// import { mainNav } from "../data/Navigation";

const MobileNav = ({ sidebarVisibility, handleMainMenuClick }) => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "http://ajtibayan.com/shortstaysintl/api/navigation"
      );
      const json = await response.json();

      if (response.ok) {
        setSocialMedia(json[0].socialMedia);
        setMainNav(json[1].mainNav);
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
                  <a href={hrefLink}>
                    <FontAwesomeIcon icon={faIcon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="topbar-mobile--right">
          <a href="#">
            <FontAwesomeIcon icon="fa-circle-user" />
          </a>
        </div>
      </div>
      <div className="header-mobile-content">
        <div className="header-left">
          <Link to="/">
            <img src="/images/4.png" className="header-mobile--logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="bookWithUsBtn-container">
            <Link to="/BookWithUs">Book With Us</Link>
          </div>
          <a
            href="#"
            className="header-mobile--bars-icon"
            onClick={handleMainMenuClick}
          >
            <FontAwesomeIcon icon="fa-bars" />
          </a>
          <div
            className={`header-mobile-sidebar ${
              sidebarVisibility ? "open" : ""
            }`}
          >
            <div className="header-mobile-sidebar_close-sidebar">
              <a href="#" onClick={handleMainMenuClick}>
                <FontAwesomeIcon icon="fa-times-circle" />
              </a>
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
