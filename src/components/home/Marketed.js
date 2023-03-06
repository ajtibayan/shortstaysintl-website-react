import React from "react";

// Components and Styles
import "./Marketed.css";

const Marketed = () => {
  return (
    <section className="section-wrapper section-marketed">
      <div className="heading-container marketed-title">
        <h2>Get marketed across the top listing websites</h2>
      </div>
      <div className="listing-websites-logos">
        <a href="#" className="grid-logo logo-airbnb">
          <img src="/staging/images/Airbnb_Logo.png" alt="" />
        </a>
        <a href="#" className="grid-logo logo-vrbo">
          <img src="/staging/images/Vrbo_Logo.png" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Marketed;
