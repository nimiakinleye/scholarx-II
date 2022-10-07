import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const SearchWrapper = styled.div`
  border: 1px solid ${Colors.text_gray};
  height: 40px;
  width: 48%;
  input::placeholder{
    color: ${Colors.text_gray};
  }
  
  input {
    background-color: transparent;
    border-style: hidden;
    color: ${Colors.text_gray};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  input:focus {
    outline: none;
  }
`;
