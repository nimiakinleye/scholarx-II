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
          arrows: false,
          dots: true,
        },
      },
    ],
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
      title: "Law Student, University of Ibadan",
      body: "I found Scholar X when I was on the verge of dropping out of school. Things were so hard and there was no financial support coming from home. In fact, I was very tired because I was on my own. As God would have it, fortune shined on me when my friend told me about Scholar X. Today, I am in my final year at school because of them!",
      image: "/images/aminat.png",
    },
    {
      name: "Princess Echibudu",
      title: "Trader, Oyingbo market",
      body: "I was in my shop one day when they brought me a product I can use on my phone. I was not interested at first because I did not have time. But, when I opened it, I saw that I could learn how to sell my market online. Not only that, I can learn everything in Igbo! Kudos to Scholar X! I have never seen this king of thing in my life.",
      image: "/images/princess.png",
    },
  ];

  return (
    <TestimonialWrapper id="testimonials">
      <Container>
        <Stack width="100%" className="testimonies">
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
