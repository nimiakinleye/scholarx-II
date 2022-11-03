import styled from "styled-components";
import { Colors } from "../../../theme/colors";
import { Screen } from "../../../theme/screens";

export const FocusWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 180px;
  background: ${Colors.primary_blue_50};
  
`;

export const FocusCardWrapper = styled.div`
  width: 250px;
  min-width:200px;
  min-height: auto;
  height: 200px;
  padding: 32px;
  background: ${Colors.gray_100};
  border: 1px solid #f5f5f6;
  box-shadow: 0px 2px 8px rgba(43, 43, 64, 0.08);
  border-radius: 8px;

  @media(max-width: ${Screen.sm}) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  padding: 8px;
  display: flex;
  justify-between: center;
  align-items: center;
  background: rgba(204, 204, 230, 0.5);
  border-radius: 50%;
  margin-bottom: 24px;
`;
