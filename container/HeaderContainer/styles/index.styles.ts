import styled from "styled-components";
import { Colors } from "../../../theme/colors";
import { Screen } from "../../../theme/screens";
import { SideBarProps } from "../type.";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SidebarWrapper = styled.div<SideBarProps>`
  position: fixed;
  overflow: hidden;
  z-index: 50;
  top: 0;
  right: 0;
  width: ${({ show }) => (show ? "100%" : 0)};
  height: ${({ show }) => (show ? "100%" : 0)};
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.65);
`;

export const NavWrapper = styled.div`
  background: ${Colors.primary};
  width: 100vw;
  height: 100vh;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    &:hover {
      color: ${Colors.yellow};
    }
  }

  @media (min-width: ${Screen.sm}) {
    max-width: 50vw;
  }
`;

export const CancelIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 51;
  width: 100%;
  display: flex;
  justify-content: end;
  cursor: pointer;
`
