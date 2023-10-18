import React, { useState } from 'react';

// Components and Styles
import './Testimonials.css';
import TestimonialQuoteBox from './TestimonialQuoteBox';
import { testimonialsData } from '../../data/TestimonialsHomePage';

const Testimonials = () => {
  const [testimonialsContent, setTestimonialsContent] =
    useState(testimonialsData);

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
