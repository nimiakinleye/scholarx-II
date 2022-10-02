import styled from "styled-components";
import { OverlayType } from "../../../types/overlay";

export const OverlayWrapper = styled.div<OverlayType>`
  width: 100%;
  height: 100%;
  background: ${({color}) => color ? color : "#000"};
  opacity: ${({opacity}) => opacity ? opacity : 0.5};
  position: absolute;
  top: 0;
  z-index: 0;
`