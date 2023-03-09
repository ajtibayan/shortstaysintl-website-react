import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import ServiceItemMobile from "../components/ourservices/ServiceItemMobile";
import ServiceItemDesktop from "../components/ourservices/ServiceItemDesktop";
import MainNav from "../components/MainNav";
import "./OurServices.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

// Assets
import { serviceItems } from "../data/OurServicesPage";

const OurServices = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchLookingForContent = async () => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
    };

    fetchLookingForContent();
  }, []);

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="section-wrapper ourServicesPg">
          <h2>Our Services & Pricing</h2>
        </section>
        <section className="our-services">
          <div className="our-services_wrapper">
            <article className="services-grid">
              {windowWidth > 1024 ? (
                <ServiceItemDesktop />
              ) : (
                serviceItems.map((serviceItem, index) => {
                  return <ServiceItemMobile {...serviceItem} key={index} />;
                })
              )}
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OurServices;
