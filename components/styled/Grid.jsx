import styled from "styled-components";

export const Grid = styled.div`
  position: ${({ position }) => position};
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  height: 100%;
  max-width: 1600px;
  margin: auto;
  column-gap: 1em;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: ${({ theme, backgroundColor = () => null }) =>
    backgroundColor(theme)};
  border-radius: 8px;
  ${({ theme, margin }) =>
    theme.mediaQuery(
      "full",
      `
  margin: ${margin || "auto"};
  `
    )}
`;
