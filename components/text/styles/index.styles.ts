import styled from "styled-components"
import { Colors } from "../../../theme/colors"
import { TextPropsType } from ".."

export const TextWrapper = styled.div<TextPropsType>`
  color: ${({color}) => color};
  margin: ${({m}) => m ? m : ""};
  padding: ${({p}) => p ? p : ""};
  font-size: ${({size}) => size ?size : "24px"};
  font-weight: ${({weight}) => weight ?weight : "400"};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : "32px"};
  align: ${({align}) => align ? align : ""};
`