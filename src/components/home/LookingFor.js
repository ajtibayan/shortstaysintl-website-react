import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./LookingFor.css";

// Assets
import { lookingForContent } from "../../data/LookingForSection";

const LookingFor = () => {
  return (
    <section className="section-wrapper section-lookingFor">
      <div className="section-container">
        {lookingForContent.map(({ id, faIcon, heading, text }) => {
          return (
            <div className="bucket-container" key={id}>
              <div className="box-container">
                <div className="box-wrapper">
                  <div className="box-wrapper_icon-container">
                    <FontAwesomeIcon icon={faIcon} />
                  </div>
                  <div className="box-wrapper_text-container">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LookingFor;
