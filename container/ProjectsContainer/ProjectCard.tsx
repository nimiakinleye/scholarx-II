import Image from 'next/image'
import React from 'react'
import { Overlay, Stack, Text } from '../../components'
import { Colors } from '../../theme/colors'
import { ProjectCardProps } from '../../types/projects'
import { ProjectCardWrapper } from './styles/index.styles'

export default function ProjectCard({project}:ProjectCardProps) {
  return (
    <ProjectCardWrapper>
      <Image width="100%" height="100%" objectFit='cover' layout='responsive'  src={`/project-images/${project.image}.png`} />
      <Stack justifyContent='center' alignItems='center' className='overlay_wrapper' height="92px" width="100%">
        <Overlay color={"#2D2E73"} opacity={0.8}></Overlay>
        <Text className='z-1' color='#ffffff'>{project.title}</Text>
      </Stack>
    </ProjectCardWrapper>
  )
}
