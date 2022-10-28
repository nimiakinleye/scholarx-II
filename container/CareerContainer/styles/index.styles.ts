import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const CareerFooter = styled.div`
  background: url(/images/careerfooter.png);
  background-position: center;
  background-size: cover;
  height: 50vh;
  // padding-top: 77px;
  position: relative;

  a {
    color: ${Colors.yellow} !important;
  }

  .heading {
    font-size: 64px;
    font-weight: 900;
    line-height: 64px important!;
    letter-spacing: 0.01em important!;
  }
`;
