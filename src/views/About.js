import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./About.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";
import AboutSSI from "../components/about/AboutSSI";

const About = () => {
  const location = useLocation();

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper aboutPg">
        <section className="section-wrapper">
          <AboutSSI />

          <article className="about_our-story clearfix">
            <img
              src="/images/about/Our-Story.jpg"
              className="rightImg"
              alt="Jonathan Lim - Co-Founder and Mai Nguyen - Co-Founder"
              width={590}
              height={590}
            />
            <h2>Our Story</h2>
            <p>
              M﻿ai & John, Co-founders of the company, are travel professionals
              & real estate investors with over 15 years of experience in the
              Hospitality industry.
            </p>
            <p>
              In 2015, on a trip to Montreal, they decided to book an Airbnb
              stay vs a hotel as they needed more space to cook and feel at
              home.
            </p>
            <p>
              After enjoying using Airbnb as travelers, in 2017, they became a
              host on Airbnb, starting with a small apartment in Toronto.
            </p>
            <p>
              However, that was an entirely new experience and throughout their
              first 2 years, they made a lot of mistakes, but they quickly
              learned and before you know it, became Superhosts and saw the
              potential of short-term rental as solutions for those looking to
              make extra income from their properties.
            </p>
            <p>
              During a Christmas party in 2019, they were introduced to a
              realtor specializing in investment properties, and seeing how Mai
              & John are experts on Airbnb, asked for their help to manage a few
              properties.
            </p>
            <p>
              And that’s how it all began. Since 2019, they have grown the
              company to hosting over 40 listings and have hosted over thousands
              of guests all across the GTA and surrounding areas.
            </p>
            <p>
              They continue to invest in new technology, softwares, education
              and growing the team to help maximize profitability for their
              clients.
            </p>
            <p>
              In 2022, with so many requests from owners who were making
              mistakes trying to do short-term rental on their own, they decided
              to launch a free monthly short-term rental workshop series as a
              way to give back and support others who are interested in learning
              how to get into the industry.
            </p>
          </article>

          <article className="about_our-mission">
            <img
              src="/images/about/ourMissionImg.jpg"
              className="our-mission-img"
              alt="Luxury homes - Our Mission - Helping you to become a successful entrepreneur in the short-term rental industry while providing amazing experiences to travelers finding a home away from home."
              width={1200}
              height={375}
            />
          </article>

          <article className="about_our-values">
            <div className="value-integrity">
              <img
                src="/images/about/values-integrity.png"
                alt="Dancing lady - Integrity"
                width={300}
                height={93}
              />
              <p>
                We set realistic expectations and do what we say to our clients
                to ensure their properties are well taken care of and their
                revenue continues to increase.
              </p>
            </div>
            <div className="value-honesty">
              <img
                src="/images/about/values-honesty.png"
                alt="Person holding The Scales of Justice - Honesty"
                width={300}
                height={93}
              />
              <p>
                We are straightforward with our clients on work & what does not
                work. We will inform you of your best options (even if it means
                not working with us).
              </p>
            </div>
            <div className="value-teamwork">
              <img
                src="/images/about/values-teamwork.png"
                alt="Team giving a collective high five - Team Work"
                width={300}
                height={93}
              />
              <p>
                We work hard to ensure a culture of open communication &
                understanding. We are open to creating a customized plan to suit
                your needs.
              </p>
            </div>
            <div className="value-positivity">
              <img
                src="/images/about/values-positivity.png"
                alt="Smiling lady - Positivity"
                width={300}
                height={93}
              />
              <p>
                We believe in creating winning opportunities & treating others
                with kindness. This is why our guests & clients love us -
                because WE CARE!
              </p>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
