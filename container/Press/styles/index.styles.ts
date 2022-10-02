import styled from "styled-components"
import { Screen } from "../../../theme/screens"

export const PressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 122px;
  margin-bottom: 64px;
  text-align: center;

  img {
    filter: grayscale(100%) opacity(30%);
    transition: 500ms;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1)
    }
  }

  @media(max-width: ${Screen.lg}) {
    img {
      max-width: 100px;
    }
  }
`