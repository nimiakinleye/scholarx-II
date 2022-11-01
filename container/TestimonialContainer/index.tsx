import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Container, Stack, Text } from "../../components";
import { TestimonialWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import Femi from "../../assets/images/Femi.png";
import TestimonyCard from "./TestimonyCard";

export default function TestimonyContainer() {
  const settings = {
    //className: "center",
    //centerMode: true,
    // infinite: true,
    // centerPadding: "50px",
    // slidesToShow: 1,
    // speed: 500,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonies = [
    { name: "Olawore Oluwafemi", title: "Law Student, University of Ibadan", body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!", image: "/images/Femi.png" },
    { name: "Aminat Zakariya", title: "Trader, Oyingbo market", body: "I found Scholar X when I was on the verge of dropping out of school. There was no financial support coming from home but thanks to Scholar X, I am in my final year at school.", image: "/images/aminat.png" },
    { name: "Princess Echibudu", title: "Trader, Oyingbo market", body: "I still can't believe that I can learn digital skills in Igbo! Kudos to Scholar X for making LearnAM for us.", image: "/images/princess.png" },
  ]

  return (
    <>
      <Container>
        <Stack width="100%">
          <Stack color={Colors.primary} p={"60px 0 0 0"}>
            <Text as="p" size={"16px"}>Testimonials</Text>
            <Text as="h4" p={"16px 0 34px 0"} size={"48px"} sm_size={"21px"}>Appreciated by Real People</Text>
          </Stack>
        </Stack>
      </Container>
      <Slider {...settings}>
        {
          testimonies?.map((testimony: any) => {
            return (
              <TestimonyCard testimony={testimony} />
            )
          })
        }
      </Slider>
    </>
  );
}
