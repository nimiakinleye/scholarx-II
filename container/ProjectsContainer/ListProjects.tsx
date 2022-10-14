import React from 'react'
import { ProjectListProps } from '../../types/projects'
import ProjectCard from './ProjectCard'
import { ListProjectsWrapper } from './styles/index.styles'

export default function ListProjects({projects, count}:ProjectListProps) {
  return (
    <ListProjectsWrapper>
      {projects?.map((project, i) => {
        return <ProjectCard key={i} project={project}/>
      })}
    </ListProjectsWrapper>
  )
}
