import styled from "styled-components";
import { Screen } from "../../../theme/screens";

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 318px;
  background: url(/images/subscribe_bg.png);
  // background: #ccc;
  background-position: center;
  background-size: cover;
  padding: 40px;
  // width: 100%;
  margin-top: 105px;

  @media (max-width: ${Screen.md}) {
    padding: 32px 8px;
  }
`;

export const InnerSubscribeWrapper = styled.div`
  width: 100%;
  max-width: 673px;
  min-height: 248px;
  background: #f5f5f6;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;

  input {
    // width: 100%;
    height: 20px;
    background: #e5e5e8;
    border: 1px solid #000080;
    border-radius: 4px;
    padding: 16px;
  }

  .circle {
    min-width: 200px;
    min-height: 200px;
    padding: 10px;
    background: #e5e5e8;
    box-shadow: 0px 10px 39px rgba(43, 43, 64, 0.16);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: ${Screen.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;
