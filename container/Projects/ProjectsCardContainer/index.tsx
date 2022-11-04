import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Stack, Text } from "../../../components";
import { Colors } from "../../../theme/colors";
import ListProjects from "../ProjectsContainer/ListProjects";
import { ProjectWrapper } from "./styles/index.styles";



export default function ProjectsCards() {
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
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchPosts()

  }, [])

  return (
    <ProjectWrapper>
      <Container>
        <Stack width='100%'>
          <Stack m="70px 0 0 0" color={Colors.primary}>
            <ListProjects projects={projects} />
          </Stack>
        </Stack>
      </Container>
    </ProjectWrapper>
  )
}