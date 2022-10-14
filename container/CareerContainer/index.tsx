import React, { useState, useEffect} from "react";
import { Stack, Text, Button } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";
import {Container} from "../../components";
import careercard from "../../assets/images/CareerContact.png"
import Image from "next/image";
//import { InferGetServerSidePropsType, GetServerSideProps } from 'next'


export default function CareerContainer() {
  const [data, setdata] = useState([]);
  const url = `https://api.scholarx.co/api/v1/jobs/all?category=cloud&page=1&limit=5`;
  
       useEffect(() => {
         fetch(url)
           .then((res) => res.json())
           .then(
             (result) => {
              let resp = result.jobs;
               setdata(resp);
             }
             );
       }, []);


  
  return (
    <>
      <Container className="content">
        <>
          <Stack width="100%" m={"20px 0 10px 0"}>
            <Text
              size={"32px"}
              fontweight={"700"}
              lineHeight={"48px"}
              color={Colors.primary}
            >
              Open roles today
            </Text>
          </Stack>

          <Stack sm_width={"100%"} direction="row" justifyContent="space-between" flexWrap="wrap" >
            <>
              {data.map((job: { role: string | number | JSX.Element | JSX.Element[]; category: string | number | JSX.Element | JSX.Element[]; }, i: number | undefined) => {
              console.log(job.category);
              console.log(job.role);
              return(
              <Stack
              key={i}
                width={"305px"}
                m={"20px 10px"}
                p={"18px"}
                bordercolor={Colors.primary_blue}
                borderstyle={"solid"}
                borderwidth={"1px"}
                height={"300px"}
                >
                <Text
                  m={"12px 0 0 0"}
                  size={"32px"}
                  fontweight={"700"}
                  textalign={"center"}
                  color={Colors.primary_blue}
                >
                  {job.role}
                </Text>
                <Stack
                  height={"70px"}
                  p={"0 0 16px 0"}
                  borderwidth={"0 0 1px 0"}
                  bordercolor={Colors.neutral_gray100}
                  borderstyle={"solid"}
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    m={"15px 0 0 0"}
                    borderwidth={"0 0 1px 0"}
                    bordercolor={Colors.yellow}
                    borderstyle={"solid"}
                    width={"38%"}
                  >
                    <Text
                      textalign="center"
                      size={"18px"}
                      color={Colors.yellow}
                    >
                      Refer a friend
                    </Text>
                  </Stack>

                  <Stack
                    width="35%"
                    m={"12px 0 0 0"}
                    direction="row"
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <ShareIcon color={Colors.neutral_gray100} />
                    <Text
                      size={"18px"}
                      m={"0 0 0 8px"}
                      color={Colors.neutral_gray100}
                    >
                      Share
                    </Text>
                  </Stack>
                </Stack>
                <Stack m={"18px 0 0 0"} height={"50px"}>
                  <Text
                    size={"18px"}
                    textalign="center"
                    color={Colors.neutral_gray100}
                  >
                    {job.category}
                  </Text>
                </Stack>
                <Stack alignItems="center" >
                  <Button size={"16px"} width={"auto"}>
                    Apply
                  </Button>
                </Stack>
              </Stack>)})}
            </>
          </Stack>
          <Stack p={"2rem 0 0 0"} m={"0 0 20px 0"} width="85%">
            <Image src={careercard}></Image>
          </Stack>
        </>
      </Container>
    </>
  );
}