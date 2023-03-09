import React from "react";

// Assets
import { aboutSSIContent } from "../../data/AboutSSI";

const AboutSSI = () => {
  return (
    <article className="about_ssi clearfix">
      {aboutSSIContent.map(({ imgUrl, imgAlt, heading, paragraphs }, index) => {
        return (
          <React.Fragment key={index}>
            <img
              src={imgUrl}
              width={590}
              height={590}
              className="leftImg"
              alt={imgAlt}
            />
            <h2>{heading}</h2>
            {paragraphs.map((pText, index) => {
              return <p key={index}>{pText}</p>;
            })}
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default AboutSSI;
