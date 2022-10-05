import styled from "styled-components"
import { Colors } from "../../../theme/colors"
import { TextPropsType } from ".."
import { Screen } from "../../../theme/screens"

export const TextWrapper = styled.div<TextPropsType>`
  color: ${({color}) => color};
  margin: ${({m}) => m ? m : ""};
  padding: ${({p}) => p ? p : ""};
  font-size: ${({size}) => size ?size : "24px"};
  font-weight: ${({weight}) => weight ?weight : "400"};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : "32px"};
  align: ${({align}) => align ? align : ""};

  @media (max-width: ${Screen.md}) {
    font-size: ${({ sm_size }) => (sm_size ? sm_size: "")};
    text-align: ${({sm_align}) => sm_align ? sm_align : ""};
  }
`