import styled from "styled-components";

export const HeroWrapper = styled.div`
  background: url(/images/hero_bg.png);
  background-position: center;
  background-size: cover;
  height: 100vh;
  // padding-top: 77px;
  position: relative;

  .content {
    position: relative;
    z-index: 1px;
  }

  .heading {
    font-weight: 900 important!;
    line-height: 64px important!;
    letter-spacing: 0.01em important!;
    text-align: left important!;
  }
`;
