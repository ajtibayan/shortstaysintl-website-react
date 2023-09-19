import { createContext, useEffect, useState, useContext } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [socialMedia, setSocialMedia] = useState([]);
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    const fetchNavigationContent = async () => {
      const response = await fetch(
        "https://ajtibayan.com/shortstaysintl/api/navigation"
      );
      const json = await response.json();

      if (response.ok) {
        setSocialMedia(json[0].socialMedia);
        setMainNav(json[1].mainNav);
      }
    };

    fetchNavigationContent();
  }, []);

  return (
    <NavContext.Provider
      value={{
        socialMedia,
        mainNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

function useNav() {
  const context = useContext(NavContext);
  return context;
}

export { NavProvider, useNav };
