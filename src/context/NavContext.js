import { createContext, useState, useContext } from 'react';

// Data
import { socialMedia as smData, mainNav as mnData } from '../data/Navigation';

const NavContext = createContext();

function NavProvider({ children }) {
  const [socialMedia, setSocialMedia] = useState(smData);
  const [mainNav, setMainNav] = useState(mnData);

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
