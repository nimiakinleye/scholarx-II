import React, { useEffect, useState } from 'react'
import { Container, Stack, Text } from '../../../components'
import { Colors } from '../../../theme/colors'
import ListProjects from './ListProjects'
import { ProjectsWrapper } from './styles/index.styles'
import GhostContentAPI from "@tryghost/content-api";
import axios from 'axios'

type ProjectsType = {
  title: string | undefined;
  feature_image: string;
  id: string;
}[]

export default function ProjectsContainer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [projects, setProjects] = useState<any>([])

  const fetchPosts = () => {
    axios.get(`${process.env.NEXT_PUBLIC_GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_KEY}&filter=tag:scholarx-projects&include=tags&limit=4
    `)
      .then(res => {
        const { posts } = res.data
        const newPosts = posts?.map((post: { title: string, feature_image: string, id: string }) => {
          const { title, feature_image, id } = post
          return { title, image: feature_image, id }
        })
        setProjects(newPosts.splice(0, 2))
        console.log(posts)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchPosts()

  }, [])

  return (
    <ProjectsWrapper>
      <Container>
        <Stack width='100%'>
          <Stack data-aos="fade-up" m="0 0 70px 0" color={Colors.primary}>
            <Text.Small>Projects</Text.Small>
            <Text lineHeight="48px" as="h1">We are touching lives one day at a time</Text>
          </Stack>
          <ListProjects projects={projects} />
        </Stack>
      </Container>
    </ProjectsWrapper>
  )
}
