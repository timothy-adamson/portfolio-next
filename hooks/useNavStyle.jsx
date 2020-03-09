import { useRef, useState, useContext } from "react";

const NavbarContext = React.createContext();

const NavbarContextProvider = ({ children }) => {
  const navRef = useRef();
  const [navStyle, setNavStyle] = useState("default");

  return (
    <NavbarContext.Provider value={{ navRef, navStyle, setNavStyle }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavRef = () => {
  const { navRef } = useContext(NavbarContext);
  return navRef;
};

const useNavStyle = () => {
  const { navStyle, setNavStyle } = useContext(NavbarContext);

  return { navStyle, setNavStyle };
};

export { NavbarContextProvider, useNavRef, useNavStyle };
