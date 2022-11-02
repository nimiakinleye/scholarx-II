import styled from "styled-components";
import { StackPropsType } from "../../../types/stack";
import { Screen } from "../../../theme/screens";

export const StackWrapper = styled.div<StackPropsType>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "auto")};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
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
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  border-width: ${({ borderwidth }) => (borderwidth ? borderwidth : "")};
  border-style: ${({ borderstyle }) => (borderstyle ? borderstyle : "")};
  border-color: ${({ bordercolor }) => (bordercolor ? bordercolor : "")};

  @media (max-width: ${Screen.lg}) {
    flex-direction: ${({ sm_direction }) => (sm_direction ? sm_direction : "")};
    flex-wrap: ${({ sm_flexWrap }) => (sm_flexWrap ? sm_flexWrap : "auto")};
    align-items: ${({ sm_alignItems }) => (sm_alignItems ? sm_alignItems : "")};
    text-align: ${({ sm_textAlign }) => (sm_textAlign ? sm_textAlign : "")};
    width: ${({ sm_width }) => sm_width};
    height: ${({ sm_height }) => sm_height};
    margin: ${({ sm_m }) => (sm_m ? sm_m : "")};
    gap: ${({ sm_gap }) => (sm_gap ? sm_gap : "")};
    padding: ${({ sm_p }) => (sm_p ? sm_p : "")};
    justify-content: ${({ sm_justifyContent }) =>
      sm_justifyContent ? sm_justifyContent : ""};
    direction: ${({ sm_direction }) => (sm_direction ? sm_direction : "")};
  }

 
  @media (max-width: ${Screen.xsm}) {
    width: ${({ xsm_width }) => xsm_width};
    margin: ${({ xm }) => (xm ? xm : "")};
    flex-direction: ${({ xm_direction }) => (xm_direction ? xm_direction : "")};
  }
  @media (max-width: ${Screen.xxsm}) {
    width: ${({ xsm_width }) => xsm_width};
    margin: ${({ xxm }) => (xxm ? xxm : "")};
  }
  @media (max-width: ${Screen.md}) {
    flex-direction: ${({ md_direction }) => (md_direction ? md_direction : "")};
    flex-wrap: ${({ md_flexWrap }) => (md_flexWrap ? md_flexWrap : "auto")};
    align-items: ${({ md_alignItems }) => (md_alignItems ? md_alignItems : "")};
    text-align: ${({ md_textAlign }) => (md_textAlign ? md_textAlign : "")};
    width: ${({ md_width }) => (md_width ? md_width : "")};
    margin: ${({ md_m }) => (md_m ? md_m : "")};
    gap: ${({ md_gap }) => (md_gap ? md_gap : "")};
    padding: ${({ md_p }) => (md_p ? md_p : "")};
    justify-content: ${({ md_justifyContent }) =>
      md_justifyContent ? md_justifyContent : ""};
    direction: ${({ md_direction }) => (md_direction ? md_direction : "")};
  }
`;
