import React from "react";
import { Link } from "react-router-dom";

const Service = ({
  _id,
  itemClass,
  image,
  serviceName,
  serviceText,
  linkLoc,
}) => {
  return (
    <div className={`${itemClass} grid-item`} key={_id}>
      <div className="img-wrapper">
        <img src={image} />
      </div>
      <div className="services-text">
        <h4>{serviceName}</h4>
        <p>{serviceText}</p>
        <Link to={linkLoc}>Learn More ></Link>
      </div>
    </div>
  );
};

export default Service;
