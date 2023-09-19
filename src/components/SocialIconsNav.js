import React from "react";

const SocialIconsNav = ({ hrefLink, name, children }) => {
  return (
    <li key={name}>
      <a
        href={hrefLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Check out our ${name} profile`}
      >
        {children}
      </a>
    </li>
  );
};

export default SocialIconsNav;
