import React from "react";

const ServicesImageMobile = ({ image, imgAlt }) => {
  return (
    <div className="service-media">
      <img src={image} width={1080} height={1080} alt={imgAlt} />
    </div>
  );
};

export default ServicesImageMobile;
