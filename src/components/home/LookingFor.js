import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components and Styles
import "./LookingFor.css";

// Assets
// import { lookingForContent } from "../../data/LookingForSection";

const LookingFor = () => {
  const [lookingForContent, setLookingForContent] = useState([]);

  useEffect(() => {
    const fetchLookingForContent = async () => {
      const response = await fetch("/api/homepage/lookingForSection");
      const json = await response.json();

      if (response.ok) {
        setLookingForContent(json);
      }
    };

    fetchLookingForContent();
  }, []);

  return (
    <section className="section-wrapper section-lookingFor">
      <div className="section-container">
        {lookingForContent.map(({ faIcon, heading, text, _id }) => {
          return (
            <div className="bucket-container" key={_id}>
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
