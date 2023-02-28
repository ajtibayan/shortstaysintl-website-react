import React, { useState } from "react";

// Components and Styles
import "./QuesAndAnsAccordion.css";

const QuesAndAnsAccordion = ({ ques, ans }) => {
  const [ansOpen, setAnsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    let ansToShow;

    if (
      e.target.classList.contains("fa-solid") ||
      e.target.classList.contains("quesTxt")
    ) {
      ansToShow = e.target.parentElement.nextSibling;
    } else {
      ansToShow = e.target.nextSibling;
    }

    console.log(ansToShow);
    let childEle = ansToShow.firstChild;

    if (
      ansToShow.style.maxHeight === "" ||
      ansToShow.style.maxHeight === "0px"
    ) {
      setAnsOpen(true);
      ansToShow.style.maxHeight = childEle.scrollHeight + "px";
    } else {
      setAnsOpen(false);
      ansToShow.style.maxHeight = "0px";
    }
  };
  return (
    <div className="qanda-text_qanda">
      <a href="#" className="qanda-text_ques" onClick={handleClick}>
        <i className={`fa-solid fa-${ansOpen ? "minus" : "plus"}`}></i>
        <span className="quesTxt">{ques}</span>
      </a>
      <div className="qanda-text_ans">
        <div className="qanda-text_ans-content">
          <p dangerouslySetInnerHTML={{ __html: ans }} />
        </div>
      </div>
    </div>
  );
};

export default QuesAndAnsAccordion;
