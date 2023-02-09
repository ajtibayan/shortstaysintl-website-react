import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./MobileNav.css";

// Assets
import { socialMedia, mainNav } from "../data/Navigation";

const MobileNav = ({ sidebarVisibility, handleMainMenuClick }) => {
  return (
    <div className="header-mobile">
      <div className="topbar-mobile">
        <div className="topbar-mobile--left">
          <ul className="topbar-mobile--social">
            {socialMedia.map(({ id, hrefLink, faIcon }) => {
              return (
                <li key={id}>
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
