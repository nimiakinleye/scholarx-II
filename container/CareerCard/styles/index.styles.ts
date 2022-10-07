import styled from "styled-components";
import { Screen } from "../../../theme/screens";

export const CareerCardWrapper = styled.div`
  width: 50%;
  
  @media (max-width: ${Screen.lg}) {
    //height: 100%;
    padding-bottom: 2rem;
  }
`;
