import React from "react";

const EventTypes = () => {
  return (
    <>
      <div className="event1 event-container">
        <div className="event-image-container">
          {/* <h2>FREE Workshops</h2> */}
          <figure className="event-image">
            <picture>
              <img
                src="/images/trainingandcoaching/freeWorkshops.jpg"
                alt="Presenter and attendees in a workshop"
                width={1080}
                height={1350}
              />
            </picture>
          </figure>
        </div>
        <div className="eventDetails">
          <p>
            We provide monthly free workshops to support your short-term rental
            journey.
          </p>
          <div className="eventLearnMore-container">
            <a
              href={"/TrainingAndCoaching#eventForm"}
              className="eventLearnMore"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="event2 event-container">
        <div className="event-image-container">
          {/* <h2>One-on-One Mentoring</h2> */}
          <figure className="event-image">
            <picture>
              <img
                src="/images/trainingandcoaching/oneOnOne.jpg"
                alt="Two people talking"
                width={1080}
                height={1350}
              />
            </picture>
          </figure>
        </div>
        <div className="eventDetails">
          <p>
            Let us help you generate immediate revenue by mentoring you on how
            to get your place ready and listed on Airbnb as we work towards your
            Superhost status.
          </p>
          <div className="eventLearnMore-container">
            <a
              href={"/TrainingAndCoaching#eventForm"}
              className="eventLearnMore"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="event3 event-container">
        <div className="event-image-container">
          {/* <h2>Short-Term Rental Blueprint Course</h2> */}
          <figure className="event-image">
            <picture>
              <img
                src="/images/trainingandcoaching/shortTerm.jpg"
                alt="Desktop computer"
                width={1080}
                height={1350}
              />
            </picture>
          </figure>
        </div>
        <div className="eventDetails">
          <p>
            Interested in learning more about our Short-Term Rental Blue Print 8
            Week Course on how to take your short term rental business to the
            next level and operate like a true rental management company?
          </p>
          <div className="eventLearnMore-container">
            <a
              href={"/TrainingAndCoaching#eventForm"}
              className="eventLearnMore"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventTypes;
