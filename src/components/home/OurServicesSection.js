import React, { useState, useEffect } from "react";

// Components and Styles
import Service from "./Service";
import "./OurServicesSection.css";

// Assets
// import { ourServices } from "../../data/OurServicesSection";

const OurServicesSection = () => {
  const [ourServicesContent, setOurServicesContent] = useState([]);

  useEffect(() => {
    const fetchOurServicesContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/homepage/ourServicesSection"
      );
      const json = await response.json();

      if (response.ok) {
        setOurServicesContent(json);
      }
    };

    fetchOurServicesContent();
  }, []);
  return (
    <section className="section-wrapper section-ourServices">
      <div className="heading-container">
        <h2>OUR SERVICES</h2>
        <h4>
          Extra services and tech that lead to happier guests, higher returns,
          and effortless vacation rental ownership for you.
        </h4>
      </div>
      <div className="services-container">
        {ourServicesContent.map((service) => {
          return <Service {...service} key={service._id} />;
        })}
      </div>
    </section>
  );
};

export default OurServicesSection;
