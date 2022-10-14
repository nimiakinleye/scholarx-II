import styled from "styled-components";
import { Screen } from "../../../theme/screens";
import { ContainerType } from "../../../types/container";

export const ContainerWrapper = styled.div<ContainerType>`
  padding: 0 130px;
  display: flex;
  flex-direction: column;
  align-items: ${({alignItems}) => alignItems ? alignItems : "center"};
  * {
    max-width: 2000px;
  }

  @media(max-width: ${Screen.lg}) {
    padding: 0 20px;
  }
  @media(max-width: ${Screen.md}) {
    align-items: ${({sm_alignItems}) => sm_alignItems ? sm_alignItems : "center"};
  }
`;
