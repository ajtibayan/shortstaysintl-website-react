import React from "react";
import { useNav } from "../context/NavContext";

// Components and Styles
import "./MobileTopBar.css";
import SocialIconsNav from "./SocialIconsNav";

const MobileTopBar = () => {
  const { socialMedia } = useNav();
  return (
    <div className="topbar-mobile">
      <ul className="topbar-mobile--social">
        {socialMedia.map((smNavInfo) => {
          return (
            <SocialIconsNav {...smNavInfo} key={smNavInfo.name}>
              <i className={smNavInfo.faIcon}></i>
            </SocialIconsNav>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileTopBar;
