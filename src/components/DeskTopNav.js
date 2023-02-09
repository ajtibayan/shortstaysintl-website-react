import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./DeskTopNav.css";

// Assets
import { socialMedia, mainNav } from "../data/Navigation";

const DeskTopNav = ({ scrollTop, url }) => {
  return (
    <div className={`header-main ${scrollTop >= 40 ? "isFixed" : ""}`}>
      <div className="header-top">
        <div className="header-top_container">
          <div className="header-top_container--left">
            <ul className="header-top_container--social">
              {socialMedia.map(({ id, hrefLink, faIcon, name }) => {
                return (
                  <li key={id}>
                    <a href={hrefLink}>
                      <span className="header-social-icons">
                        <FontAwesomeIcon icon={faIcon} />
                      </span>
                      <span className="header-social-text">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header-top_container--right">
            <a href="#">
              <FontAwesomeIcon icon="fa-circle-user" />
            </a>
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
              />
            </Link>
          </div>
          <div className="header-content_container--right">
            <ul className="header-content_container--main-menu">
              {mainNav.map(({ id, linkTo, linkName }) => {
                return (
                  <li className={url === linkTo ? "activePg" : ""} key={id}>
                    <Link to={linkTo}>{linkName}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNav;
