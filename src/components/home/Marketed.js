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
        <div className="grid-logo logo-airbnb">
          <img
            src="/images/Airbnb_Logo.png"
            width={300}
            height={94}
            alt="Airbnb logo"
          />
        </div>
        <div className="grid-logo logo-vrbo">
          <img
            src="/images/Vrbo_Logo.png"
            width={300}
            height={96}
            alt="Vrbo logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Marketed;
