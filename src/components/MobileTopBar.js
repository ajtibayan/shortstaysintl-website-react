import React, { useEffect, useState } from "react";

// Components and Styles
import "./MobileTopBar.css";
import SocialIconsNav from "./SocialIconsNav";

const MobileTopBar = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/navigation"
      );
      const json = await response.json();

      if (response.ok) {
        setSocialMedia(json[0].socialMedia);
      }
    };

    fetchNavigationContent();
  }, []);
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
