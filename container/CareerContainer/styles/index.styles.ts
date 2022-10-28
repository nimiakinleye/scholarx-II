import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const CareerFooter = styled.div`
  background: url(/images/careerfooter.png);
  background-position: center;
  background-size: cover;
  height: 50vh;
  position: relative;
  border-radius: 12px;

  a {
    color: ${Colors.yellow} !important;
  }

`;
