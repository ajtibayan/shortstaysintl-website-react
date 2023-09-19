import React from "react";
import { Link } from "react-router-dom";
import { useNav } from "../NavContext";

// Components and Styles
import "./DeskTopNav.css";
import SocialIconsNav from "./SocialIconsNav";
import MainLogo from "./MainLogo";

const DeskTopNav = ({ scrollTop, url }) => {
  const { socialMedia, mainNav } = useNav();

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
        </div>
      </div>
      <div className="header-content">
        <div className="header-content_container">
          <MainLogo />
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
