import { NavbarContextProvider } from "../hooks/useNavStyle";

const ContextProvider = Component => {
  return props => (
    <NavbarContextProvider>
      <Component {...props}>{props.children}</Component>
    </NavbarContextProvider>
  );
};

export default ContextProvider;
