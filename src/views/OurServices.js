import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

// Components and Styles
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

export const ServiceItemDesktop = () => {
  const [activeImg, setActiveImg] = useState("consulting"),
    [stickyHeight, setStickyHeight] = useState();

  useEffect(() => {
    const descListing = document.getElementById("dtDesc-listing"),
      descManagement = document.getElementById("dtDesc-management"),
      descTravel = document.getElementById("dtDesc-travel"),
      descFinancing = document.getElementById("dtDesc-financing"),
      serviceImg = document.querySelector(".sticky-img > img");

    const update = () => {
      const descPosListing = descListing.getBoundingClientRect(),
        descPosManagement = descManagement.getBoundingClientRect(),
        descPosTravel = descTravel.getBoundingClientRect(),
        descPosFinancing = descFinancing.getBoundingClientRect(),
        imgPosTop = serviceImg.getBoundingClientRect(),
        imgPos = imgPosTop["top"] + serviceImg.height;

      setStickyHeight(serviceImg.height + 100);

      if (descPosListing["top"] > imgPos) {
        setActiveImg("consulting");
      } else if (
        descPosListing["top"] <= imgPos &&
        descPosManagement["top"] > imgPos
      ) {
        setActiveImg("listing");
      } else if (
        descPosManagement["top"] <= imgPos &&
        descPosTravel["top"] > imgPos
      ) {
        setActiveImg("management");
      } else if (
        descPosTravel["top"] <= imgPos &&
        descPosFinancing["top"] > imgPos
      ) {
        setActiveImg("travel");
      } else if (descPosFinancing["top"] <= imgPos) {
        setActiveImg("financing");
      }
    };

    document.addEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="service-media dt-media">
        <div className="sticky-img" style={{ height: `${stickyHeight}px` }}>
          {serviceItems.map(({ divClass, image }) => {
            return (
              <img
                src={image}
                className={`dtImg-${divClass} ${
                  activeImg === divClass ? "active" : ""
                }`}
                key={`img-${divClass}`}
              />
            );
          })}
        </div>
      </div>
      <div className="service-description dt-desc">
        {serviceItems.map(({ title, divClass, description }) => {
          return (
            <div
              className="service-item"
              id={`dtDesc-${divClass}`}
              key={`dtDesc-${divClass}`}
            >
              <h3>{title}</h3>
              {description.map(({ subHeading, bullets }, index) => {
                return (
                  <React.Fragment key={index}>
                    {subHeading === "travel" || subHeading === "financing" ? (
                      <p dangerouslySetInnerHTML={{ __html: bullets[0] }} />
                    ) : (
                      <>
                        {subHeading && <h4>{subHeading}</h4>}
                        <ul className="fa-ul">
                          {bullets.map((bullet, index) => {
                            return (
                              <li key={index}>
                                <span className="fa-li">
                                  <i className="fa-solid fa-check"></i>
                                </span>
                                {bullet}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export const ServiceItemMobile = ({ title, divClass, image, description }) => {
  return (
    <div className={`service-item ${divClass}`}>
      <h3>{title}</h3>
      <Fade left>
        <ServicesImageMobile image={image} />
      </Fade>
      {description.map((desc, index) => {
        return <ServiceDescriptionMobile {...desc} key={index} />;
      })}
    </div>
  );
};

export const ServicesImageMobile = ({ image }) => {
  return (
    <div className="service-media">
      <img src={image} />
    </div>
  );
};

export const ServiceDescriptionMobile = ({ subHeading, bullets }) => {
  return (
    <div className="service-description">
      {subHeading === "travel" || subHeading === "financing" ? (
        <p dangerouslySetInnerHTML={{ __html: bullets[0] }} />
      ) : (
        <>
          {subHeading && <h4>{subHeading}</h4>}
          <ul className="fa-ul">
            {bullets.map((bullet, index) => {
              return (
                <li key={index}>
                  <span className="fa-li">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  {bullet}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default OurServices;
