import React from "react";
import { useLocation, Link } from "react-router-dom";

// Components and Styles
import MainNav from "../components/MainNav";
import "./FAQs.css";
import SubBanner from "../components/SubBanner";
import Footer from "./Footer";
import QuesAndAnsAccordion from "../components/faqs/QuesAndAnsAccordion";

const FAQs = () => {
  const location = useLocation();

  const accordionOwnersContent = [
    {
      ques: "Am I a good fit for Short Stays International?",
      ans: "Before we take on any new rentals, your property must meet several standards, it must be clean, safe and has to be rental ready, equipped with all the basic essentials needed for day to day living.",
    },
    {
      ques: "Why should I choose Short Stays International?",
      ans: "We are a boutique management company who are hands on with every client and property who operate with high levels of safety and integrity. Our boutique approach allows for the homeowner to be involved or completely hands off.",
    },
    {
      ques: "How are you different from other companies?",
      ans: "We do an extensive 360 review of your property and analyze all local competition. Our team offers all services in house and can also manage outsourcing contractors depending on your budget. We are also available during times when other 9-5 companies will not pick up your calls. We basically work around the clock to handle emergencies so that you don’t have to.",
    },
    {
      ques: "What does the 20% rental management fee include",
      ans: "Complete management of online profiles, communications and  handling of check in and out process, managing and scheduling cleaners. Managing & tracking of inventory/supplies and working with local handy contractors to fix any small issues that arise.",
    },
    {
      ques: "How do you qualify a guest?",
      ans: "We have an extensive process that checks guests history of short term renting experience. We check ages (25yrs or older only), where the guest is visiting from, what the purpose of their trip is, etc…We have a zero tolerance for parties and make sure guests have a mutual respect for the neighborhood. We do all this by engaging in extensive conversation with our potential guests and using our 15 years of experience in the hospitality industry to identify any red flags.",
    },
    {
      ques: "What happens if they damage items or areas in my property?",
      ans: "We have an option to charge a security deposit. Our team also follows a protocol to work with Airbnb/VrBO to either charge the guest or use their insurance to cover the costs of the damage.",
    },
    {
      ques: "Can I cancel my contract at anytime?",
      ans: "We invest a lot of time, resources and energy in the beginning, during the set up, a lot of communications go into filling the property. We also want to make sure all property owners are profitable. We ask that all new clients give us time to recuperate our time and energy spent so a minimum of (6) months of operating is required before canceling. However we understand life happens and are always willing to make exceptions when needed.",
    },
    {
      ques: "I want to rent out my property - how do I get started?",
      ans: "We have a checklist that needs to be filled before any property is listed. This is non negotiable. Once all requirements are met. One of our team members will work extensively on finishing the listing to have your property listed.",
    },
    {
      ques: "Do I need a permit for my short term rental?",
      ans: "It varies depending on your city, town or municipality. We will contact the City bylaw office to make sure your your address needs a permit and or is zoned for permit",
    },
    {
      ques: "How do I prepare for my short term rental?",
      ans: "We have a check-list to help you - here’s the link to access the <a href='https://forms.gle/W7myMArazWt5PTSF8' target='_blank'>check list</a>.",
    },
  ];

  const accordionGuestsContent = [
    {
      ques: "Why should I book a stay with one of your properties?",
      ans: "Each of our property is fully inspected by one of our local managers to ensure they are fully equipped, and is exactly what’s described in the listing (hence no surprises). We are always available for emergency calls and to handle any unexpected issues. You won’t have to deal with an absent host as we know how frustrating that can be.",
    },
    {
      ques: "What happens if I need to cancel my booking?",
      ans: "We recommend you to read thoroughly the cancellation policy available on each of the booking site that we host on (Airbnb or VRBO) and make a decision based on the policy before you book. We understand there are always emergencies but these hosting sites will help handle all different situations that may arise. If you book directly with us, usually we allow guests to cancel 30 days prior to check-in. ",
    },
    {
      ques: "What’s the difference between booking on Airbnb/VRBO vs booking directly with Short Stays International?",
      ans: "We offer returning guests and qualified guests to book directly with us for a 10% discount on the pricing they see on Airbnb or VRBO. There will also be no service fees added. This can save you hundreds of dollars when booking directly with us.",
    },
  ];

  return (
    <>
      <MainNav />
      <SubBanner bannerUrl={location.pathname} />
      <div className="content-wrapper">
        <section className="section-wrapper">
          <h2>Frequently Asked Questions</h2>
        </section>
        <section className="section-wrapper">
          <article className="article-qanda">
            <h3 className="owners-title">Property Owners</h3>
            <div className="qanda-text_container ownersText">
              {accordionOwnersContent.map((quesAndAns, index) => {
                return <QuesAndAnsAccordion {...quesAndAns} key={index} />;
              })}
            </div>
            <h3 className="guests-title">Guests</h3>
            <div className="qanda-text_container guestsText">
              {accordionGuestsContent.map((quesAndAns, index) => {
                return <QuesAndAnsAccordion {...quesAndAns} key={index} />;
              })}
            </div>
            <div className="qanda-img_container">
              <div className="qanda-img_wrapper">
                <img src="/images/faqs/danny-transparent.png" />
              </div>
              <div className="qanda-img_btn_container">
                <Link to="/Contact">
                  <span>INTERESTED?</span> CONTACT US NOW
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
