import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components and Styles
import "./SubBanner.css";

// Assets
import { subBanners } from "../data/SubBanner";

const SubBanner = ({ bannerUrl }) => {
  const [bgImg, setBgImg] = useState(),
    [breadcrumb, setBreadcrumb] = useState();

  useEffect(() => {
    subBanners.map(({ page, bannerImgUrl, breadcrumb }) => {
      if (page === bannerUrl) {
        setBgImg(bannerImgUrl);
        setBreadcrumb(breadcrumb);
      }
    });
  }, []);

  return (
    <section
      className="subBanner"
      style={bgImg && { backgroundImage: `url(${bgImg})` }}
    >
      <div className="banner-overlay"></div>
      <div className="subBanner-wrapper">
        <div className="subBanner-container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{breadcrumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
