import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Mulish', sans-serif;
    scroll-behavior: smooth;
    max-width: 1800px;
    margin: 0 auto;
  }
  body, p, div, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0em;
  }

  h3 {
    font-size: 48px;
    font-weight: 500;
    line-height: 64px;
    letter-spacing: 0.01em;
  }

  .z-1 {
    z-index: 1;
  }

  .pointer {
    cursor: pointer;
  }
`;
