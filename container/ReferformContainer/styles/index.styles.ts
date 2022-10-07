import styled from "styled-components";
import { Colors } from "../../../theme/colors";
import { Screen } from "../../../theme/screens";

export const ReferformWrapper = styled.div`
    
    
  width: 55%;
  margin: 25px 0;
  padding: 30px 20px 0px 20px;
  border: 1px solid #000000; 
  border-radius: 20px;
  label {
    color: ${Colors.primary};
    
  }
 
  input {
    color: ${Colors.gray_300};
    height: 54px;
    margin: 0px 0;
  }
  input::placeholder {
    color: ${Colors.gray_300};
    padding: 0 0 0 5px;
  }
  input::focus {
    outline: none;
  }
  @media (max-width: ${Screen.md}){
    width: 90%;
  }
`;
