import React from 'react'
import { Container, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import ListProjects from './ListProjects'
import { ProjectsWrapper } from './styles/index.styles'

export default function ProjectsContainer() {
  const projects = [
    {title: "Ikorodu Activation", image:"project1"},
    {title: "Ikorodu Activation", image:"project2"},
    {title: "LearnAM Workshop", image:"project3"},
    {title: "Ikorodu Activation", image:"project4"},
  ]
  return (
    <ProjectsWrapper>
      <Container>
        <Stack width='100%'>
          <Stack m="0 0 70px 0" color={Colors.primary}>
            <Text.Small>Projects</Text.Small>
            <Text lineHeight="48px" as="h1">We are touching lives one day at a time</Text>
          </Stack>
          <ListProjects projects={projects}/>
        </Stack>
      </Container>
    </ProjectsWrapper>
  )
}
