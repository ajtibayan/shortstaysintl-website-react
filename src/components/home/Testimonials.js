import React, { useState, useEffect } from "react";

// Components and Styles
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonialsContent, setTestimonialsContent] = useState([]);

  useEffect(() => {
    const fetchTestimonialsContent = async () => {
      const response = await fetch(
        "http://ajtibayan.com/shortstaysintl/api/homepage/testimonialsSection"
      );
      const json = await response.json();

      if (response.ok) {
        setTestimonialsContent(json);
      }
    };

    fetchTestimonialsContent();
  }, []);
  return (
    <section className="section-wrapper section-testimonials">
      <div className="heading-container">
        <h2>What our clients & guests are saying:</h2>
      </div>
      <div className="testimonials-container">
        {testimonialsContent.map(
          ({
            _id,
            testimonialNum,
            blockquoteClass,
            mediaImg,
            quoteText,
            quoterName,
          }) => {
            return (
              <div className={testimonialNum} key={_id}>
                <blockquote className={blockquoteClass}>
                  <div className="blockquote-content">
                    {mediaImg != "" && (
                      <div className="blockquote-media">
                        <img src={mediaImg} />
                      </div>
                    )}

                    <p>{quoteText}</p>
                  </div>
                  <cite className="blockquote-cite">
                    <span>{quoterName}</span>
                  </cite>
                </blockquote>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Testimonials;
