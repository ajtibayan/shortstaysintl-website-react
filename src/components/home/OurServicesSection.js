import React from "react";

// Components and Styles
import Service from "./Service";
import "./OurServicesSection.css";

// Assets
import { ourServices } from "../../data/OurServicesSection";

const OurServicesSection = () => {
  return (
    <section className="section-wrapper">
      <div className="heading-container">
        <h2>Added benefits and management services</h2>
        <h4>
          Extra services and tech that lead to happier guests, higher returns,
          and effortless vacation rental ownership for you.
        </h4>
      </div>
      <div className="services-container">
        {ourServices.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default OurServicesSection;
