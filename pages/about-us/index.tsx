import type { NextPage } from 'next'
import Head from 'next/head'

import { AboutHeader, Team, FoundingTeam, Contact, FooterContainer} from '../../container';


const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutHeader/> 
        <Team/> 
        <FoundingTeam/>
        <Contact/>
        <FooterContainer/>
        </>
  );
};
        
export default About;