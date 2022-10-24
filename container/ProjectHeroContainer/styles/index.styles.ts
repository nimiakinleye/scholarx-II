import styled from "styled-components";


export const HeroWrapper = styled.div<{image?:string}>`
background: ${({image}) => image ? `url(${image})` : `url(/images/project-head.png)`};
  background-position: center;
  background-size: cover;
  height: 453px;
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