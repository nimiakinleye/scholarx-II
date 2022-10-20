import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FocusContainer, FooterContainer, HeroContainer, PressContainer, StatisticsContainer, SubscribeContainer, ProductsContainer, ProjectsContainer } from '../container'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ScholarX | Home</title>
        <meta name="description" content="Learn diverse skills online, get funding for your education, upskill your workers and grow your business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroContainer />
      <StatisticsContainer />
      <FocusContainer />
      <ProductsContainer />
      <ProjectsContainer />
      <PressContainer />
      <SubscribeContainer />
      <FooterContainer />
    </>
  )
}

export default Home
