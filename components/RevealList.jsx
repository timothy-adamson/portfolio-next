import styled, { keyframes, css } from "styled-components";
import { useEffect, useRef, useState } from "react";

const GridContainer = styled.div`
  pointer-events: none;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  height: 100vh;
  width: calc(100% - 24px);
  max-width: 1600px;
  margin: auto;
  padding: 0px 12px;
  column-gap: 1em;
  align-items: center;
  left: 0;
  right: 0;
`;

const FixedCard = styled.div`
  grid-column-start: 9;
  grid-column-end: 11;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: ${({ open }) => (open ? "48px" : "0px")};
  height: ${({ open }) => (open ? "400px" : "0px")};
  width: 100%;
  margin-left: auto;
  background: url(/RevealListBG.jpg);
  background-size: cover;
  background-position: center 100px;
  box-shadow: 0px 12px 24px -20px rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
  z-index: 2;
  ${({ theme }) =>
    theme.mediaQuery(
      "lg",
      `grid-column-start: 9;
      grid-column-end: 12;`
    )}
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `grid-column-start: 8;
      grid-column-end: 12;`
    )}
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 1s ease, height 1s ease, padding 1s ease;
`;

const CardText = styled.div`
  position: absolute;
  margin: 16px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  opacity: ${({ visible, open }) => (visible && open ? "1" : "0")};
  transition: opacity 0.5s ease;
`;

const RevealList = ({ section }) => {
  const timeoutRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setOpen(false);
    }

    timeoutRef.current =
      section !== "contact" ? setTimeout(() => setOpen(true), 1000) : null;
  }, [section]);

  open;

  return (
    <GridContainer>
      <FixedCard visible={section !== "contact"} open={open}>
        <CardText visible={section === null} open={open}>
          <p>
            Welcome! I am a London-based web developer with a focus on
            delivering modern applications as quickly as possible.
          </p>
          <p>
            I have professional experience developing both internal systems and
            public-facing websites.
          </p>
        </CardText>
        <CardText visible={section === "skills"} open={open}>
          <p>Listed here are the skills I have used at a professional level.</p>
          <p>
            I continue to learn new technologies to keep up with the development
            landscape.
          </p>
          <p>
            Here are some of my general thoughts and how I apply them in my
            work.
          </p>
        </CardText>
        <CardText visible={section === "work"} open={open}>
          <p>
            Here I have outlined some of my completed work as a software
            developer.
          </p>
          <p>
            View or download my CV, or check out my Github where I keep my
            personal projects.
          </p>
        </CardText>
      </FixedCard>
    </GridContainer>
  );
};

export default RevealList;
