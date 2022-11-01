import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Container, Stack, Text } from "../../components";
import { TestimonialWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import Femi from "../../assets/images/Femi.png";

type Props = {
  testimony: {
    name: string;
    title: string;
    body: string;
    image: string;
  }
}

export default function TestimonyCard({ testimony }: Props) {
  return (
    <TestimonialWrapper>
      <Container>
        <Stack width="100%">
          <Stack className="testimonialCard" width="100%">
            <Stack smDirection="column" direction="row" p={"80px 100px 84px 100px"} sm_p={"80px 10px 10px 10px"} alignItems="center" gap="24px" md_p={"40px 40px 84px 40px"} xm_direction="column">
              <Stack>
                <Image src={testimony?.image} alt={testimony?.name} height="360px" width="360px" className="image" />
                <Text as="h5" className="text" size="20px" color={Colors.neutral}>{testimony?.name}</Text>
                <Text as="p" size="14px" color={Colors.gray_600}>{testimony?.title}</Text>
              </Stack>
              <Stack width="60%" p={"0 0 50px 0"} sm_width="100%">
                <Text as="p" size="20px" color={Colors.neutral}>
                  {testimony?.body}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </TestimonialWrapper>
  );
}
