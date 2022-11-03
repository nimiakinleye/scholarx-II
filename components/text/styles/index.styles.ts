import styled from "styled-components"
import { Colors } from "../../../theme/colors"
import { TextPropsType } from ".."
import { Screen } from "../../../theme/screens"

export const TextWrapper = styled.div<TextPropsType>`
  color: ${({ color }) => color};
  margin: ${({ m }) => (m ? m : "")};
  padding: ${({ p }) => (p ? p : "")};
  font-size: ${({ size }) => (size ? size : "24px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "32px")};
  align: ${({ align }) => (align ? align : "")};
  text-align: ${({ textalign }) => (textalign ? textalign : "")};
  font-weight: ${({ fontweight }) => (fontweight ? fontweight : "")};
  border-width: ${({ borderwidth }) => (borderwidth ? borderwidth : "")};
  border-style: ${({ borderstyle }) => (borderstyle ? borderstyle : "")};
  border-color: ${({ bordercolor }) => (bordercolor ? bordercolor : "")};

  @media (max-width: ${Screen.sm}) {
    font-size: ${({ sm_size }) => (sm_size ? sm_size : "")};
    text-align: ${({ sm_align }) => (sm_align ? sm_align : "")};
    line-height: ${({ sm_lineHeight }) => (sm_lineHeight ? sm_lineHeight : "")};
  }
`;

  
