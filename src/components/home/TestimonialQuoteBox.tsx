import React from 'react';

// Assets
import { TestimonialQuote } from '../../models/HomeData';

const TestimonialQuoteBox = ({
  id,
  testimonialNum,
  blockquoteClass,
  mediaImg,
  quoteText,
  quoterName,
  imgAlt,
}: TestimonialQuote) => {
  return (
    <div className={testimonialNum} key={id}>
      <blockquote className={blockquoteClass}>
        <div className="blockquote-content">
          {mediaImg !== '' && (
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
