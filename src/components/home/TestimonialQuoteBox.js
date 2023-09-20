import React from "react";

const TestimonialQuoteBox = ({
  _id,
  testimonialNum,
  blockquoteClass,
  mediaImg,
  quoteText,
  quoterName,
  imgAlt,
}) => {
  return (
    <div className={testimonialNum} key={_id}>
      <blockquote className={blockquoteClass}>
        <div className="blockquote-content">
          {mediaImg !== "" && (
            <div className="blockquote-media">
              <img src={mediaImg} width={710} height={838} alt={imgAlt} />
            </div>
          )}

          <p className="relative mt-0">{quoteText}</p>
        </div>
        <cite className="blockquote-cite">
          <span>{quoterName}</span>
        </cite>
      </blockquote>
    </div>
  );
};

export default TestimonialQuoteBox;
