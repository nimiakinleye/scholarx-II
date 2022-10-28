import React, { useState, useEffect } from "react";
import { Stack, Text, Button } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";
import { Container } from "../../components";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { CareerFooter } from "./styles/index.styles";

//import { InferGetServerSidePropsType, GetServerSideProps } from 'next'


export default function CareerContainer() {
  const [data, setData] = useState([]);
  const url = `https://api.scholarx.co/api/v1/jobs/all`;

  useEffect(() => {
    axios(url)
      .then(res => {
        const { jobs } = res?.data
        console.log(jobs)
        setData(jobs)
      })
      .catch(err => {
        console.log(err)
      })
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

          <Stack
            sm_width={"100%"}
            direction="row"
            sm_justifyContent="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <>
              {data.map(
                (
                  job: {
                    role: string | number | JSX.Element | JSX.Element[];
                    _id: string;
                    category: string | number | JSX.Element | JSX.Element[];
                  },
                  i: number | undefined
                ) => {
                  return (
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
                          <Link href={`/refer/${job?._id}`}>
                            <a>
                              <Text
                                textalign="center"
                                size={"18px"}
                                color={Colors.yellow}
                              >
                                Refer a friend
                              </Text>
                            </a>
                          </Link>
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
                      <Stack alignItems="center">
                        <Link href={`/careers/${job?._id}`}>
                          <a>
                            <Button size={"16px"} width={"auto"}>
                              Apply
                            </Button>
                          </a>
                        </Link>
                      </Stack>
                    </Stack>
                  );
                }
              )}
            </>
          </Stack>
          <Stack p={"2rem 0 0 0"} m={"0 0 20px 0"} width="85%">
            <CareerFooter>
              <Stack
              flexWrap={"wrap"}
                height={"50vh"}
                m={"auto"}
                direction={"column"}
                justifyContent={"center"}
              >
                <Text
                  weight={"700"}
                  color={Colors.white}
                  size={"32px"}
                  lineHeight={"48px"}
                  m={"0 0 1.5rem 0"}
                  textalign={"center"}
                >
                  Did not find your role?
                </Text>
                <Text
                  weight={"700"}
                  size={"20px"}
                  lineHeight={"32px"}
                  color={Colors.yellow}
                  textalign={"center"}
                >
                  Don’t worry. Email your resume to
                </Text>
                <Link onClick={() => window.location.href = 'mailto:info@scholarx.co'}
                href={""}>
                  <a>
                    <Text
                      weight={"700"}
                      size={"20px"}
                      lineHeight={"32px"}
                      color={Colors.yellow}
                      textalign={"center"}
                    >
                      <a href="" onClick={() => window.location.href = 'mailto:info@scholarx.co'}>info@scholarx.co</a>
                    </Text>
                  </a>
                </Link>
                <Text
                  weight={"700"}
                  size={"20px"}
                  lineHeight={"32px"}
                  color={Colors.yellow}
                  textalign={"center"}
                >
                  to be considered for future openings.
                </Text>
              </Stack>
            </CareerFooter>
          </Stack>
        </>
      </Container>
    </>
  );
}