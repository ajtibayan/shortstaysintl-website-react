import React from "react";

// Components and Styles
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="section-wrapper section-testimonials">
      <div className="heading-container">
        <h2>What our clients & guests are saying:</h2>
      </div>
      <div className="testimonials-container">
        <div className="testimonial-1">
          <blockquote className="blockquote emphasized">
            <div className="blockquote-content">
              <div className="blockquote-media">
                <img src="https://via.placeholder.com/512x288" />
              </div>
              <p>
                Great location right off the highway Shopping is amazing every
                major retailer is less than a 5 minute drive ! Quiet
                neighborhood, beautiful parks . Thank you Andy your reason why
                we extended our stay an extra three weeks on a scale of 1 to 10
                our stay was a 15
              </p>
            </div>
            <cite className="blockquote-cite">
              <picture>
                <img src="https://via.placeholder.com/100" />
              </picture>
              <span>Quoter Name</span>
            </cite>
          </blockquote>
        </div>
        <div className="testimonial-2">
          <blockquote className="blockquote emphasized">
            <p className="blockquote-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              ipsa, et animi incidunt consequatur molestiae, nostrum vel dolores
              soluta cumque. Sint repellendus laboriosam officia!
            </p>
            <cite className="blockquote-cite">
              <picture>
                <img src="https://via.placeholder.com/100" />
              </picture>
              <span>Quoter Name</span>
            </cite>
          </blockquote>
        </div>
        <div className="testimonial-3">
          <blockquote className="blockquote">
            <p className="blockquote-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              ipsa, et animi incidunt consequatur molestiae, nostrum vel dolores
              soluta cumque. Sint repellendus laboriosam officia!
            </p>
            <cite className="blockquote-cite">
              <picture>
                <img src="https://via.placeholder.com/100" />
              </picture>
              <span>Quoter Name</span>
            </cite>
          </blockquote>
        </div>
        <div className="testimonial-4">
          <blockquote className="blockquote">
            <p className="blockquote-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
              ipsa, et animi incidunt consequatur molestiae, nostrum vel dolores
              soluta cumque. Sint repellendus laboriosam officia!
            </p>
            <cite className="blockquote-cite">
              <picture>
                <img src="https://via.placeholder.com/100" />
              </picture>
              <span>Quoter Name</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
