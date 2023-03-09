import React from "react";
import Fade from "react-reveal/Fade";

// Components and Styles
import ServiceDescriptionMobile from "./ServiceDescriptionMobile";
import ServicesImageMobile from "./ServicesImageMobile";

const ServiceItemMobile = ({
  title,
  divClass,
  image,
  imgAlt,
  description,
  pricing,
}) => {
  return (
    <div className={`service-item ${divClass}`}>
      <h3>{title}</h3>
      <Fade left>
        <ServicesImageMobile image={image} imgAlt={imgAlt} />
      </Fade>
      {description.map((desc, index) => {
        return <ServiceDescriptionMobile {...desc} key={index} />;
      })}
      {pricing && (
        <span style={{ fontWeight: "700", fontSize: "1.15rem" }}>
          {pricing}
        </span>
      )}
    </div>
  );
};

export default ServiceItemMobile;
