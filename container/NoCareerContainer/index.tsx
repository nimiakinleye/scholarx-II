import React from "react";
import Image from "next/image";
import nocareer from "../../assets/images/no_career.png"
import { Container, Button, Stack, Text } from "../../components";
import { Colors } from "../../theme/colors";


export default function NoCareerContainer(){
    return (
      <>
        <Container className="content">
          <Stack width="100%" direction="row">
            <Stack width="55%" m={"30px 0 10px 0"}>
              <Stack>
                <Text
                  size={"32px"}
                  fontweight={"700"}
                  lineHeight={"48px"}
                  color={Colors.yellow}
                >
                  We have no job openings at the moment.
                </Text>
                <Text
                  m={"20px 0"}
                  size={"24px"}
                  fontweight={"600"}
                  lineHeight={"36px"}
                  color={Colors.gray_600}
                >
                  To be considered first for future roles, email your resume to scholarx@gmail.com
                  </Text>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                width="80%"
                justifyContent="space-between"
              >
                <Stack p="1rem">
                  <Button width={"auto"}>Send Message</Button>
                </Stack>
                <Stack
                  xm={"0 1rem 0 1rem"}
                  xxm={"0 0 0 1rem"}
                  bordercolor={Colors.primary_blue}
                  borderstyle={"solid"}
                  borderwidth={"1px"}
                  width={"154px"}
                  m="1rem"
                >
                  <Button
                    text={Colors.primary}
                    width={"auto"}
                    color={Colors.white}
                  >
                    Refer a Friend
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack m="3rem 0 2rem 2rem" width="40%">
              <Image src={nocareer}></Image>
            </Stack>
          </Stack>
        </Container>
      </>
    );}
