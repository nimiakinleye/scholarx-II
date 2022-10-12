import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../../../container'
import { useRouter } from 'next/router'


const Projects: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>{ id }</title>
        <meta name="description" content="about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={JSON.parse(JSON.stringify(id))}/>
    </>
  )
}

export default Projects
