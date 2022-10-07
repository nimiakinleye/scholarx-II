import styled from "styled-components";
import { Colors } from "../../../theme/colors";
import { ButtonPropsType } from "../../../types/button";

export const ButtonWrapper = styled.button<ButtonPropsType>`
  padding: ${({ size }) => (size === "lg" ? "18px 32px" : "14px 16px")};
  text-transform: capitalize;
  
  display: flex;
  border: none;
  margin: ${({ m }) => (m ? m : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  border-radius: 4px;
  transition: background-color 0.2s linear;
  background-color: ${({ stroke, color }) =>
    stroke ? "rgb(0,0,0,0)" : color ? color : Colors.primary};
  box-shadow: ${({ stroke }) =>
    stroke
      ? `inset -2px 0 0 ${Colors.primary}, inset 0 -2px 0 ${Colors.primary}, inset 2px 0 0 ${Colors.primary}, inset 0 2px 0 ${Colors.primary}`
      : ""};
  color: ${({ stroke, text }) =>
    stroke ? Colors.primary : text ? text : Colors.white};
  font-size: ${({ size }) => (size === "large" ? "24px" : "18px")};
  font-family: "Mulish", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: ${({ hover }) => (hover ? hover : Colors.yellow)};
    box-shadow: ${({ stroke }) =>
      stroke
        ? `inset -2px 0 0 ${Colors.yellow}, inset 0 -2px 0 ${Colors.yellow}, inset 2px 0 0 ${Colors.yellow}, inset 0 2px 0 ${Colors.yellow}`
        : ""};
    color: ${({ hover_text }) => (hover_text ? hover_text : Colors.primary)};
  }
`;
