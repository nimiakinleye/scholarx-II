import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const CategoryWrapper = styled.div`
  border: 1px solid ${Colors.text_gray};
  display: flex;
  width: auto;
  height: 64px;

  select {
    background: transparent;
    color: ${Colors.text_gray};
    margin-left: 0px;
    border-style: hidden;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  select:focus {
    outline: 0;
  }
  option {
    background: ${Colors.primary};
    color: ${Colors.text_gray};
  }
`;
