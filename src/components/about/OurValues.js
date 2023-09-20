import React from "react";

const OurValues = () => {
  return (
    <article className="about_our-values">
      <div className="value-integrity">
        <img
          src="/images/about/values-integrity.png"
          alt="Dancing lady - Integrity"
          width={300}
          height={93}
        />
        <p>
          We set realistic expectations and do what we say to our clients to
          ensure their properties are well taken care of and their revenue
          continues to increase.
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
          We are straightforward with our clients on work & what does not work.
          We will inform you of your best options (even if it means not working
          with us).
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
          understanding. We are open to creating a customized plan to suit your
          needs.
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
          We believe in creating winning opportunities & treating others with
          kindness. This is why our guests & clients love us - because WE CARE!
        </p>
      </div>
    </article>
  );
};

export default OurValues;
