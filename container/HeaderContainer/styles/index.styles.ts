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
  width: ${({ show }) => (show ? "100vw" : 0)};
  width: 100%;
  height: ${({ show }) => (show ? "100%" : 0)};
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  max-width: none;
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
  width: 100vw;
  max-width: none;
  display: flex;
  justify-content: end;
  cursor: pointer;
`

export const NavBgWrapper = styled.div`
  background-image: url(/images/nav_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: relative:
  z-index: 0;
  
  ::after {
    width: 100vh;
    max-width: 50vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    color: rgba(0, 0, 0, 0)
  }

  @media (max-width: ${Screen.lg}) {
    display: none;
  }
`
