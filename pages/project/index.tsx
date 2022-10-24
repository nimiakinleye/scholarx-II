import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, FooterContainer, ProjectsCards} from '../../container'
//import { AboutHeader, Team, FoundingTeam, Contact, FooterContainer} from '../../container'


const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <ProjectsCards/>
      <FooterContainer/>
        

        
     
      

    </>
  )
}

export default Projects
