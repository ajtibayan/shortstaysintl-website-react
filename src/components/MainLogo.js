import React from "react";
import { Link } from "react-router-dom";

// Components and Styles
import "./MainLogo.css";

const MainLogo = () => {
  return (
    <div className="mainLogo">
      <Link to="/">
        <img
          src="/images/4.png"
          alt="Short Stays International logo"
          width={375}
          height={139}
        />
      </Link>
    </div>
  );
};

export default MainLogo;
