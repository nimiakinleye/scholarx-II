import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Overlay, Stack, Text } from '../../../components'
import { Colors } from '../../../theme/colors'
import { ProjectCardProps } from '../../../types/projects'
import { truncateText } from '../../../util/commonFunctions'
import { ProjectCardWrapper } from './styles/index.styles'

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`project/${project?.id}`}>
      <a>
        <ProjectCardWrapper>
          {/* <Image width="100%" height="100%" objectFit='cover' layout='responsive' src={`/project-images/${project.image}.png`} /> */}
          <Image blurDataURL='/images/placeholder.webp' width="100%" height="100%" objectFit='cover' objectPosition="center"  layout='responsive' src={project?.image || `/images/placeholder.webp`} />
          <Stack justifyContent='center' alignItems='center' className='overlay_wrapper' height="92px" width="100%">
            <Overlay color={"#2D2E73"} opacity={0.8}></Overlay>
            <Text p="8px" className='z-1' color='#ffffff'>{truncateText(project.title, 35)}</Text>
          </Stack>
        </ProjectCardWrapper>
      </a>
    </Link>
  )
}
