import React from "react";
import { Link } from "react-router-dom";

const Service = ({
  _id,
  itemClass,
  image,
  serviceName,
  serviceText,
  linkLoc,
  altAtt,
}) => {
  return (
    <div className={`${itemClass} grid-item`} key={_id}>
      <div className="mb-2 w-full text-center">
        <img
          className="mx-auto h-auto w-2/5 rounded-full md:w-2/3"
          src={image}
          width={250}
          height={250}
          alt={altAtt}
        />
      </div>
      <div className="services-text">
        <h4 className="font-bold">{serviceName}</h4>
        <p className="mt-2">{serviceText}</p>
        <Link
          to={linkLoc}
          className="mt-2 block font-bold text-[#0078ab] no-underline hover:underline"
        >
          Learn More &gt;
        </Link>
      </div>
    </div>
  );
};

export default Service;
