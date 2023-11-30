import React, { useState } from 'react';

// Components and Styles
import './LookingFor.css';

// Assets;
import { lookingForContent as lfcData } from '../../data/LookingForSection';
import { LookingForData } from '../../models/HomeData';

const LookingFor = () => {
  const [lookingForContent, setLookingForContent] = useState(lfcData);

  return (
    <section className="section-wrapper section-lookingFor">
      <div className="section-container">
        {lookingForContent.map(
          ({ faIcon, heading, text, id }: LookingForData) => {
            return (
              <div className="bucket-container" key={id}>
                <div className="box-container">
                  <div className="box-wrapper">
                    <div className="box-wrapper_icon-container">
                      <i className={faIcon}></i>
                    </div>
                    <div className="box-wrapper_text-container">
                      <h3 className="mb-4 text-2xl font-bold text-[#282f44]">
                        {heading}
                      </h3>
                      <p className="text-[#717580]">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default LookingFor;
