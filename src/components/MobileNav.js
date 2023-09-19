import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components and Styles
import "./MobileNav.css";
import MobileTopBar from "./MobileTopBar";
import MainLogo from "./MainLogo";

const MobileNav = ({ sidebarVisibility, handleMainMenuClick }) => {
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/navigation"
      );
      const json = await response.json();

      if (response.ok) {
        setMainNav(json[1].mainNav);
      }
    };

    fetchNavigationContent();
  }, []);
  return (
    <div className="header-mobile">
      <MobileTopBar />
      <div className="header-mobile-content">
        <MainLogo />
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
