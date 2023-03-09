import React from "react";
import { Link } from "react-router-dom";

const BookWithUsBox = ({
  boxClass,
  indexNum,
  title,
  text,
  btnUrl,
  btnText,
}) => {
  return (
    <div className={`flex flex-item ${boxClass}`}>
      <div className="item-text">
        <div className="index-num">{indexNum}</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="flex item-btn_container">
        {btnText === "Check Our Listings" ? (
          <a href={btnUrl} target="_blank" rel="noreferrer" className="btn">
            {btnText}
          </a>
        ) : (
          <Link to={btnUrl} className="btn">
            {btnText}
          </Link>
        )}

        {/* <a href={btnUrl} target="" className="btn">
          {btnText}
        </a> */}
      </div>
    </div>
  );
};

export default BookWithUsBox;
