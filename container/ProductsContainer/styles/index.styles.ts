import styled from "styled-components";
import { Colors } from "../../../theme/colors";
import { Screen } from "../../../theme/screens";

export const ProductsWrapper = styled.div`
  padding-top: 56px;

  @media(max-width: ${Screen.sm}) {
    .prod_image {
      max-width: 100%;
    }
  }
`
