import React, { useState, useEffect } from "react";

// Components and Styles
import "./Testimonials.css";
import TestimonialQuoteBox from "./TestimonialQuoteBox";

const Testimonials = () => {
  const [testimonialsContent, setTestimonialsContent] = useState([]);

  useEffect(() => {
    const fetchTestimonialsContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/homepage/testimonialsSection",
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
        <h2 className="mb-4 text-4xl font-bold">
          What our clients & guests are saying:
        </h2>
      </div>
      <div className="testimonials-container">
        {testimonialsContent.map((testimonial) => {
          return <TestimonialQuoteBox {...testimonial} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
