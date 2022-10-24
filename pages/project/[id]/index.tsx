import type { NextPage } from 'next'
import Head from 'next/head'
import { FooterContainer, Hero, ViewProject } from '../../../container'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Projects: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [project, setProject] = useState<any>([])

  const fetchPosts = () => {
    axios.get(`${process.env.NEXT_PUBLIC_GHOST_URL}/ghost/api/v3/content/posts/${id}?key=${process.env.NEXT_PUBLIC_GHOST_KEY}
    `)
      .then(res => {
        const { posts:post } = res.data
        console.log(post[0])
        setProject(post[0])
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if(id) {
      fetchPosts()
    }

  }, [id])
  return (
    <>
      <Head>
        <title>ScholarX Project - { project?.title }</title>
        <meta name="description" content="about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ViewProject project={project}/>
      <FooterContainer />
    </>
  )
}

export default Projects
