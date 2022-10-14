import React from "react";
import { Container,Stack,Text } from "../../components";
import { Colors } from "../../theme/colors";
import ListProjects from "../ProjectsContainer/ListProjects";
import { ProjectWrapper } from "./styles/index.styles";



export default function ProjectsCards() {
    const projects = [
      {title: "Scholarships", image:"scholar"},
      {title: "Ikorodu Activation", image:"ikorodu"},
      {title: "LearnAM Skills Fare", image:"learnam"},
      {title: "Builder's Association", image:"builders"},
      {title: "Adamawa Workshop", image:"adamawa"},
      {title: "Design Sprint", image:"design"},
      {title: "Trade Association", image:"trade"},
      {title: "Career Fair", image:"career"},
    ]
    return (
    <ProjectWrapper>
        <Container>
          <Stack width='100%'>
            <Stack m="0 0 70px 0" color={Colors.primary}>
             <Text as="h3" color={"#000000"}>Our Projects</Text>
            </Stack>
            <ListProjects projects={projects}/>
          </Stack>
        </Container>
     </ProjectWrapper>
    )
  }