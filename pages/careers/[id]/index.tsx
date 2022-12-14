import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SingleCareerHeroContainer from "../../../container/SingleCareerHeroContainer";
import CareerContainer from "../../../container/CareerContainer/index";
import SingleCareerContainer from "../../../container/SingleCareerContainer/index"
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleCareerHeroContainer />
      <SingleCareerContainer />
    </>
  );
};

export default Home;
