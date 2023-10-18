import React, { useState } from 'react';

// Components and Styles
import Service from './Service';
import './OurServicesSection.css';

// Assets;
import { ourServices } from '../../data/OurServicesSection';

const OurServicesSection = () => {
  const [ourServicesContent, setOurServicesContent] = useState(ourServices);

  return (
    <section className="section-wrapper section-ourServices">
      <div className="heading-container">
        <h2 className="mb-4 text-4xl font-bold">OUR SERVICES</h2>
        <h4 className="text-base font-bold">
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
