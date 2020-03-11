import { useRef, useState, useContext } from "react";
import { useRouter } from "next/router";

const NavbarContext = React.createContext();

const NavbarContextProvider = ({ children }) => {
  const { route } = useRouter();

  const navRef = useRef();
  const [navStyle, setNavStyle] = useState(
    route === "/[section]" ? "opaque" : "default"
  );

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
