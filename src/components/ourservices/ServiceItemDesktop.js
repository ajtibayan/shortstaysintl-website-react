import React, { useState, useEffect } from "react";

// Assets
import { serviceItems } from "../../data/OurServicesPage";

const ServiceItemDesktop = () => {
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
          {serviceItems.map(({ divClass, image, imgAlt }) => {
            return (
              <img
                src={image}
                className={`dtImg-${divClass} ${
                  activeImg === divClass ? "active" : ""
                }`}
                key={`img-${divClass}`}
                alt={imgAlt}
                width={1080}
                height={1080}
              />
            );
          })}
        </div>
      </div>
      <div className="service-description dt-desc">
        {serviceItems.map(({ title, divClass, description, pricing }) => {
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
              {pricing && (
                <span style={{ fontWeight: "700", fontSize: "1.15rem" }}>
                  {pricing}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceItemDesktop;
