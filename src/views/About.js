import React from "react";
import { useLocation } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./About.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";

const About = () => {
  const location = useLocation();

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper aboutPg">
        <section className="section-wrapper">
          <article className="about_ssi clearfix">
            <img
              src="/staging/images/about/About-Us.jpg"
              className="leftImg"
            ></img>
            <h2>About Us</h2>
            <p>
              Short Stays International is a boutique company specializing in
              Short-Term & Mid-Term Rental Management in the Greater Toronto
              Areas, Niagara Falls, Crystal Beach & Collingwood.
            </p>
            <p>
              But we are not just a company, we are a team of people that care,
              that go beyond and above to ensure all guests receive a 5 star
              experience which help owners maximize their revenue.
            </p>
            <p>
              Our team comprises of Airbnb & VRBO Experienced Hosts,
              Communication Experts, Local Hosts in major areas like Toronto,
              Mississauga & Niagara Falls, Airbnb Cleaning Pros & Travel Pros.
              As a boutique management firm, you can be guaranteed that all
              hands are on deck to provide a full on service for your guests.
            </p>
          </article>

          <article className="about_our-story clearfix">
            <img
              src="https://via.placeholder.com/590x583"
              className="rightImg"
            ></img>
            <h2>Our Story</h2>
            <p>
              M﻿ai & John, co-founders of the company, are travel professionals
              and 12 years ago, on a trip to Montreal, they decided to book an
              Airbnb stay vs going to a hotel as they needed more space to cook
              and feel at home.
            </p>
            <p>
              After a great experience with a host, they saw an opportunity to
              create an extra income stream to support their travels. A few
              years later, they became a host on Airbnb, renting out their tiny
              apartment in downtown Toronto.
            </p>
            <p>
              That was an entirely new experience and throughout their first 2
              years, they made a lot of mistakes, but they quickly learned and
              before you know it, became Superhosts and saw the potential of
              short-term rental as solutions for various types of owners.
            </p>
            <p>
              Seeing how they are experts at renting out their properties, they
              were introduced to a local realtor who was looking for help with a
              few investment properties for short-term rental.
            </p>
            <p>
              That was how they started. Since 2019, they grew the company to
              hosting over 40 listings and have hosted over thousands of guests
              all across the GTA and surrounding areas.
            </p>
            <p>
              They continue to invest in new technology, softwares, education
              and growing the team to help maximize profitability for their
              clients.
            </p>
            <p>
              In , they get so many requests from owners who were making
              mistakes trying to do short-term rental on their own, they decided
              to launch a free monthly short-term rental workshop series as a
              way to give back and support others who are interested in learning
              how to get into the industry.
            </p>
          </article>

          <article className="about_our-mission">
            <img
              src="/staging/images/about/ourMissionImg.jpg"
              className="our-mission-img"
            />
          </article>

          <article className="about_our-values">
            <div className="value-integrity">
              <img src="/staging/images/about/values-integrity.png" />
              <p>
                We set proper expectations and do what we said we would do for
                our clients to ensure their properties are well taken care of
                and their bottom line continues to increase.
              </p>
            </div>
            <div className="value-honesty">
              <img src="/staging/images/about/values-honesty.png" />
              <p>
                We are not shy to tell our clients what will work and what will
                not work and we will let you know the best options for you (even
                if it means not working with us).
              </p>
            </div>
            <div className="value-teamwork">
              <img src="/staging/images/about/values-teamwork.png" />
              <p>
                We are team players and are always open to customize our
                offering to your needs.
              </p>
            </div>
            <div className="value-positivity">
              <img src="/staging/images/about/values-positivity.png" />
              <p>
                We believe in creating win-win opportunities & to treat others
                with kindness. This is why our guests & clients love us -
                because we care about them.
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
