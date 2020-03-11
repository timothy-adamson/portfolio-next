import Link from "next/link";
import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";
import { useNavRef, useNavStyle } from "../hooks/useNavStyle";

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  margin-top: -12px;
  padding: ${({ navStyle }) => (navStyle === "default" ? "12px 0px" : "0px")};
  z-index: 1;
  background-color: ${({ navStyle, theme }) =>
    navStyle === "default" ? "unset" : theme.colors.white};
  box-shadow: ${({ navStyle }) =>
    navStyle === "default" ? "" : "0px 0px 6px rgba(0,0,0,0.2)"};
  transition: background-color 0.2s ease, padding 0.2s ease;
`;

const Menu = styled.ul`
  position: relative;
  display: flex;
  height: 100%;
  max-width: 1024px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `
      display: grid;
      grid-template-columns: repeat(3, 1fr)
  `
    )}
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 24px;
  font-size: 24px;
  font-weight: 300;
  top: 0px;
  transition: top 0.2s ease, filter 0.2s ease;
  & > div {
    position: absolute;
    bottom: -2px;
    height: 1px;
    width: 0%;
    background-color: ${({ color }) => color};
    transition: width 0.3s ease;
  }
  &:hover > div {
    width: 100%;
  }
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `
      margin: 24px auto;
      font-size: 16px;
  `
    )}
`;

const Navbar = () => {
  const navRef = useNavRef();
  const { navStyle } = useNavStyle();

  const { colors } = useTheme();

  const router = useRouter();

  const handleClick = path => event => {
    event.preventDefault();
    router.push(router.pathname, path, { shallow: true });
  };

  return (
    <NavContainer ref={navRef} navStyle={navStyle}>
      <Menu>
        <MenuItem color={colors.primary}>
          <a onClick={handleClick("/skills")}>skills</a>
          <div></div>
        </MenuItem>
        <MenuItem color={colors.secondary}>
          <a onClick={handleClick("/work")}>work</a>
          <div></div>
        </MenuItem>
        <MenuItem color={colors.link}>
          <a onClick={handleClick("/contact")}>contact</a>
          <div></div>
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
