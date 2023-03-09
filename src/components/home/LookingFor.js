import React, { useState, useEffect } from "react";

// Components and Styles
import "./LookingFor.css";

const LookingFor = () => {
  const [lookingForContent, setLookingForContent] = useState([]);

  useEffect(() => {
    const fetchLookingForContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/homepage/lookingForSection"
      );
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
                    <i className={faIcon}></i>
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
