import styled from "styled-components"
import { Colors } from "../../../theme/colors"
import { TextPropsType } from ".."

export const TextWrapper = styled.div<TextPropsType>`
  color: ${({color}) => color};
  margin: ${({m}) => m ? m : ""};
  font-size: ${({size}) => size ?size : "24px"};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : "32px"};
  align: ${({align}) => align ? align : ""};
`