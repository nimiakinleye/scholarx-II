import styled from "styled-components"
import { Colors } from "../../../theme/colors"


export const AllWrapper = styled.div`
  background: ${Colors.neutral};
  color: #CCCCD1;

  a {
    color: #CCCCD1;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 41px;
  padding-bottom: 41px;
  color: ${Colors.neutral};
  width: 100%;

  a {
    text-decoration: none;
  }
`

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  // padding: 11.2px;
  background-color: #555566;
  border-radius: 50%;
`