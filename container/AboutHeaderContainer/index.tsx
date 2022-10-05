import React from "react";
import Image from "next/image";
import { Container, Stack, Text } from "../../components";
import { HeaderContainer } from "..";
import { Colors } from "../../theme/colors";
import about from '../../assets/images/about-1.png'

export default function AboutHeader() {
  return (
    <Container>
      <Stack>
        <Stack m={"50px 0 0 0"}>
          <HeaderContainer color={Colors.primary}/>
        </Stack>
        <Stack direction="row" m={"80px 0 0 0"} justifyContent={"space-between"} md_direction="column" gap={"51px"}>
          <Stack className={"headerText"} width={"70%"} md_width={"100%"}>
            <Text as="h3" color={Colors.primary} weight={"700"} >About Us</Text>
            <Text as="p" weight={"400"} color={Colors.gray_600} size={"18px"} lineHeight={"36px"} p={"24px 0 0 0"} >
              Founded in 2015, ScholarX is a social impact startup that focuses
              on Educational Financing. We are committed to helping young
              Africans access quality education and skills through Scholarships,
              Crowdfunding (Village), and E-Learning. By linking young people
              with financial aid both domestically and overseas, we are closing
              the funding gap for education.
            </Text>
          </Stack>
          {/* m={"0 0 0 51px"}  width={"50%"} */}
          <Stack className={"HeaderImage"}  >
                <Image src={about} alt="some of the ScholarX team members"/>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
