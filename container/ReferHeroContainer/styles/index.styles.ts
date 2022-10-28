import styled from "styled-components";
import { Screen } from "../../../theme/screens";
import { Colors } from "../../../theme/colors";

export const ReferHeroWrapper = styled.div`
  background-color: ${Colors.primary};
  background-size: cover;
  height: 80%;
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

export const ReferHeroWrap = styled.div`
  //background-color: #000055;
  background-position: center;
  background-size: cover;
  margin-top: -40px;
  width: 258px;
  height: 378px;
  @media (max-width: ${Screen.lg}) {
    display: none;
  }
  @media (max-width: ${Screen.lg}) {
    //top: 24.5%;
  }
`;
