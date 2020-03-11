import Navbar from "./Navbar";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState, useEffect, useMemo } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Spartan';
    background-color: #f5f5f5;
    background-image: url('/topography.svg')
  }
  a {
    text-decoration: none
  }
  a:visited {
    color: inherit
  }
  a:link {
    color: inherit
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }`;

const theme = {
  colors: {
    background: "#F4E8BD",
    primary: "#082434",
    secondary: "#2A1A3E",
    link: "#AC1B25",
    gold: "#DEA53E",
    white: "#f5f5f5"
  },
  breakpoints: {
    sm: "800px",
    md: "1100px",
    lg: "1400px",
    full: "1532px"
  },
  mediaQuery: (size, styles) => {
    switch (size) {
      case "sm":
        return `@media (max-width: 800px) {
          ${styles}
        }`;
      case "md":
        return `@media (max-width: 1100px) {
          ${styles}
        }`;
      case "lg":
        return `@media (max-width: 1400px) {
          ${styles}
        }`;
      case "full":
        return `@media (max-width: 1664px) {
          ${styles}
        }`;
    }
  }
};

const Page = ({ children }) => {
  const [windowSize, setWindowSize] = useState();

  const handleResize = () => setWindowSize(window.innerHeight);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const theme = useMemo(
    () => ({
      colors: {
        background: "#F4E8BD",
        primary: "#082434",
        secondary: "#2A1A3E",
        link: "#AC1B25",
        gold: "#DEA53E",
        white: "#f5f5f5"
      },
      breakpoints: {
        sm: "800px",
        md: "1100px",
        lg: "1400px",
        full: "1532px"
      },
      mediaQuery: (size, styles) => {
        switch (size) {
          case "sm":
            return `@media (max-width: 800px) {
            ${styles}
          }`;
          case "md":
            return `@media (max-width: 1100px) {
            ${styles}
          }`;
          case "lg":
            return `@media (max-width: 1400px) {
            ${styles}
          }`;
          case "full":
            return `@media (max-width: 1664px) {
            ${styles}
          }`;
        }
      },
      windowSize
    }),
    [windowSize]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Head>
        <title>Timothy Adamson</title>
        <link
          href="https://fonts.googleapis.com/css?family=Spartan:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default Page;
