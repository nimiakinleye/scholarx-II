import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Mulish', sans-serif;
    scroll-behavior: smooth;
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
`;
