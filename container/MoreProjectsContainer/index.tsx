import React from "react"
import { Container,Stack,Text } from "../../components"
import ListProjects from "../Projects/ProjectsContainer/ListProjects"
import { ProjectWrapper } from "./styles/index.styles"

export default function MoreProjects(){
    const projects = [
        {title: "Scholarships", image:"scholar"},
        {title: "Trade Association", image:"trade"},
        {title: "LearnAM Skills Fare", image:"learnam"},
        {title: "Builder's Association", image:"builders"},
        
      ]
    return(
        <ProjectWrapper>
            <Container>
            <Stack width='100%'>
            <Stack m="0 0 70px 0">
             <Text as="h4" color={"#000000"} size={"38px"}>See More Projects</Text>
            </Stack>
            {/* <ListProjects projects={projects}/> */}
          </Stack>
        </Container>
        </ProjectWrapper>
        
    )
}