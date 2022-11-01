import React from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Container, Stack, Text } from "../../components";
import { TestimonialWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import TestimonyCard from "./TestimonyCard";

export default function TestimonyContainer() {
  const NextArrow = ({ onClick }: { onClick: any }) => {
    return (
      <div onClick={onClick}>
        <AiOutlineRight className="arrow next" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: { onClick: any }) => {
    return (
      <div onClick={onClick}>
        <AiOutlineLeft className="arrow prev" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          dots:true,
        }
      }
    ]
  };

  const testimonies = [
    {
      name: "Olawore Oluwafemi",
      title: "Law Student, University of Ibadan",
      body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!",
      image: "/images/Femi.png",
    },
    {
      name: "Aminat Zakariya",
      title: "Trader, Oyingbo market",
      body: "I found Scholar X when I was on the verge of dropping out of school. There was no financial support coming from home but thanks to Scholar X, I am in my final year at school.",
      image: "/images/aminat.png",
    },
    {
      name: "Princess Echibudu",
      title: "Trader, Oyingbo market",
      body: "I still can't believe that I can learn digital skills in Igbo! Kudos to Scholar X for making LearnAM for us.",
      image: "/images/princess.png",
    },
  ];

  return (
    <TestimonialWrapper>
      <Container>
        <Stack width="100%">
          <Stack color={Colors.primary} p={"60px 0 0 0"}>
            <Text as="p" size={"16px"}>
              Testimonials
            </Text>
            <Text as="h4" p={"16px 0 34px 0"} size={"48px"} sm_size={"21px"}>
              Appreciated by Real People
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Slider {...settings}>
        {testimonies?.map((testimony: any, i) => {
          return <TestimonyCard testimony={testimony} key={i} />;
        })}
      </Slider>
    </TestimonialWrapper>
  );
}
