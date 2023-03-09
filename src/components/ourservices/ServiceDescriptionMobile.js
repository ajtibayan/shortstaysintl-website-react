import React from "react";

const ServiceDescriptionMobile = ({ subHeading, bullets }) => {
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

export default ServiceDescriptionMobile;
