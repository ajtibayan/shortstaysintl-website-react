import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import "./MainNav.css";
import MobileNav from "./MobileNav";
import DeskTopNav from "./DeskTopNav";

const MainNav = () => {
  const location = useLocation();
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [url, setUrl] = useState(null);

  const handleMainMenuClick = (e) => {
    e.preventDefault();
    setSidebarVisibility((prevVisibility) => !prevVisibility);
  };

  const setScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <header className="header">
      <MobileNav
        sidebarVisibility={sidebarVisibility}
        handleMainMenuClick={handleMainMenuClick}
      />
      <DeskTopNav scrollTop={scrollTop} url={url} />
    </header>
  );
};

export default MainNav;
