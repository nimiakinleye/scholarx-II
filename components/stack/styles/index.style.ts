import styled from "styled-components";
import { StackPropsType } from "../../../types/stack";
import { Screen } from "../../../theme/screens";

export const StackWrapper = styled.div<StackPropsType>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  flex-wrap: ${({flexWrap}) => (flexWrap ? flexWrap : "auto")};
  width: ${({ width }) => (width ? width : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  color: ${({ color }) => (color ? color : "")};
  background: ${({ bgColor }) => (bgColor ? bgColor : "")};
  margin: ${({ m }) => (m ? m : "")};
  padding: ${({ p }) => (p ? p : "")};
  border-radius: ${({ rounded }) => (rounded ? rounded : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  min-height: ${({minHeight}) => (minHeight ? minHeight : "")};

  @media (max-width: ${Screen.lg}) {
    flex-direction: ${({ sm_direction }) => (sm_direction ? sm_direction : "")};
    align-items: ${({ sm_alignItems }) => (sm_alignItems ? sm_alignItems : "")};
    text-align: ${({ sm_alignItems }) => (sm_alignItems ? sm_alignItems : "")};
    width: ${({ sm_width }) => (sm_width ? sm_width : "")};
    margin: ${({ sm_m }) => (sm_m ? sm_m : "")};
    gap: ${({ sm_gap }) => (sm_gap ? sm_gap : "")};
    padding: ${({ sm_p }) => (sm_p ? sm_p : "")};
  }
`;
