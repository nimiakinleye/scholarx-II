import React from "react";
import Image from "next/image";
import { Container, Stack, Text } from "../../components";
import { Colors } from "../../theme/colors";
import about from "../../assets/images/about-2.png";
import { TeamWrapper } from "./styles/index.styles";
export default function Team() {
  return (
    // <TeamWrapper>
    <Container alignItems="flex-start">
      
        <Stack width="100%" m={"80px 0 80px 0"} >
          <Stack data-aos="fade-up">
            <Text
              as="h4"
              color={Colors.primary}
              weight={"700"}
              lineHeight={"64px"}
              sm_size={"21px"}
              size={"48px"}
            
            >
              Our Amazing Team at Work
            </Text>
          </Stack>
          <Stack data-aos="fade-up" p={"40px 0 0 0"}>
            <Image objectFit="cover" objectPosition={"center"} src={about} alt={"team members"} />
          </Stack>
        </Stack>
    
    </Container>
    // </TeamWrapper>
  );
}
