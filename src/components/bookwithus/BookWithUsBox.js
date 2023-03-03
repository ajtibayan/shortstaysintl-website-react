import React from "react";

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
        <a href={btnUrl} target="_blank" className="btn">
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default BookWithUsBox;
