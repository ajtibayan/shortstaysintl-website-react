import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./BookWithUs.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";
import BookWithUsBox from "../components/bookwithus/BookWithUsBox";

const BookWithUs = () => {
  const location = useLocation();

  const bookWithUsBoxes = [
    {
      boxClass: "book-a-stay",
      indexNum: "1",
      title: "BOOK A STAY",
      text: "Looking for a place for your team or staff when working in the GTA or Niagara Falls?",
      btnUrl: "https://www.airbnb.ca/users/41514146/listings",
      btnText: "Check Our Listings",
    },
    {
      boxClass: "create-a-tour",
      indexNum: "2",
      title: "CREATE A TOUR",
      text: "We provide custom tours for small groups looking to explore Toronto & Niagara Falls.",
      btnUrl: "/Contact",
      btnText: "Contact Us",
    },
    {
      boxClass: "vacation-package",
      indexNum: "3",
      title: "VACATION PACKAGE",
      text: "As a TICO registered company, we work with a team of travel pros that can service your travel needs. We specialize in South Group Vacations & Cruises. For more info, contact us.",
      btnUrl: "/Contact",
      btnText: "Contact Us",
    },
  ];

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper aboutPg">
        <section className="section-wrapper">
          <article className="flex flex-column bookWithUs-items">
            {bookWithUsBoxes.map((bookWithUsBox) => {
              return (
                <BookWithUsBox
                  {...bookWithUsBox}
                  key={bookWithUsBox.indexNum}
                />
              );
            })}
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookWithUs;
