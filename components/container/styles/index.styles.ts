import styled from "styled-components";
import { Screen } from "../../../theme/screens";

export const ContainerWrapper = styled.div`
  padding: 0 130px;
  display: flex;
  flex-direction: column;
  // width: 100%;
  align-items: center;
  * {
    max-width: 2000px;
  }

  @media(max-width: ${Screen.lg}) {
    padding: 0 20px;
  }
`;
