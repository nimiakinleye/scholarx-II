import type { NextPage } from "next";
import Head from "next/head";
import { IkoroduDetails,FooterContainer,MoreProjects } from "../../container";

const Ikorodu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="Ikorodu Activation page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <IkoroduDetails />
      <MoreProjects/>
      <FooterContainer/>
      
    </>
  );
};

export default Ikorodu;
