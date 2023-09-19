import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components and Styles
import "./DeskTopNav.css";
import SocialIconsNav from "./SocialIconsNav";

const DeskTopNav = ({ scrollTop, url }) => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/navigation"
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
    <div
      className={`header-main${scrollTop >= 40 ? " isFixed" : ""}${
        url !== "/" ? " subPg" : ""
      }`}
    >
      <div className="header-top">
        <div className="header-top_container">
          <div className="header-top_container--left">
            <ul className="header-top_container--social">
              {socialMedia.map((smNavInfo) => {
                return (
                  <SocialIconsNav {...smNavInfo} key={smNavInfo.name}>
                    <span className="header-social-icons">
                      <i className={smNavInfo.faIcon}></i>
                    </span>
                    <span className="header-social-text">{smNavInfo.name}</span>
                  </SocialIconsNav>
                );
              })}
            </ul>
          </div>
          <div className="header-top_container--right">
            {/* <a href="#">
              <FontAwesomeIcon icon="fa-circle-user" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="header-content_container">
          <div className="header-content_container--left">
            <Link to="/">
              <img
                src="/images/4.png"
                className="header-content_container--logo"
                alt="Short Stays International logo"
                width={375}
                height={139}
              />
            </Link>
          </div>
          <div className="header-content_container--right">
            <ul className="header-content_container--main-menu">
              {mainNav.map(({ linkTo, linkName }) => {
                return (
                  <li
                    className={url === linkTo ? "activePg" : ""}
                    key={linkName}
                  >
                    <Link to={linkTo}>{linkName}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="bookWithUsBtn-container">
              <Link to="/BookWithUs" className="btn">
                Book With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNav;
