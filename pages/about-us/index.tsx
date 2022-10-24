import type { NextPage } from 'next'
import Head from 'next/head'

import { AboutHeader, Team, FoundingTeam, Contact, FooterContainer } from '../../container';


const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>ScholarX | About Us</title>
        <meta name="description" content="Founded in 2016, ScholarX is a social impact startup that focuses on Educational Financing. We are committed to helping young Africans access quality education and skills through Scholarships..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutHeader />
      <Team />
      <FoundingTeam />
      <Contact />
      <FooterContainer />
    </>
  );
};

export default About;