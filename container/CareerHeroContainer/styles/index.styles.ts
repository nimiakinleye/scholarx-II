import styled from "styled-components";
import { Screen } from "../../../theme/screens";
import { Colors } from "../../../theme/colors";

export const CareerHeroWrapper = styled.div`
  background-color: ${Colors.primary};
  background-size: cover;
  height: 80vh;
  position: relative;
  width: auto;

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

export const CareerHeroWrap = styled.div`
  //background-color: #000055;
  background-position: center;
  background-size: cover;
  @media (max-width: ${Screen.lg}) {
    
    padding-top: 4rem;
  }
  @media (max-width: ${Screen.md}) {
    
    display: hidden !important;
  } ;
`;
