import styled from "styled-components";

export const HeroWrapper = styled.div`
  background: url(/images/hero_bg.png);
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;

  .content {
    position: relative;
    z-index: 1px;
  }

  .heading {
    font-size: 64px;
    font-weight: 900;
    line-height: 64px important!;
    letter-spacing: 0.01em important!;
  }
  @media(max-width:500px){
    height:100%;
  }
`;
