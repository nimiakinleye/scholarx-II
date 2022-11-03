import styled from "styled-components";
import { Colors } from "../../../../theme/colors";
import { Screen } from "../../../../theme/screens";

export const ProjectsWrapper = styled.div`
  background: ${Colors.primary_blue_50};
  padding-top: 25px;
  padding-bottom: 202px;
  margin-top: 100px;
`;

export const ProjectCardWrapper = styled.div`
  max-width: 582px;
  height: 354px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  .overlay_wrapper {
    position: absolute;
    bottom: 0;
  }
`;

export const ListProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 89px;
  column-gap: 29px;

  @media (max-width: ${Screen.md}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
  }
`;
