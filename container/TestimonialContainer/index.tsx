import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Stack, Text } from "../../components";
import { TestimonialWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
<<<<<<< HEAD
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
=======


export default function TestimonyContainer() {

  const sliderSettings = {
    //dots: true,
>>>>>>> 60b702ba3d1fcdefe49724d771b4053ee96ae22a
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite:false,
  };

  const testimonies = [
<<<<<<< HEAD
    { name: "Olawore Oluwafemi", title: "Law Student, University of Ibadan", body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!", image: "/images/Femi.png" },
    { name: "Aminat Zakariya", title: "Trader, Oyingbo market", body: "I found Scholar X when I was on the verge of dropping out of school. There was no financial support coming from home but thanks to Scholar X, I am in my final year at school.", image: "/images/aminat.png" },
    { name: "Princess Echibudu", title: "Trader, Oyingbo market", body: "I still can't believe that I can learn digital skills in Igbo! Kudos to Scholar X for making LearnAM for us.", image: "/images/princess.png" },
  ]
=======
    {
      name: "Olawore Oluwafemi",
      title: "Law Student, University of Ibadan",
      body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!",
      image: "/images/Femi.png",
    },
    /*{
      name: "Aminat Zakariya",
      title: "Law Student, University of Jos",
      body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!",
      image: "/images/Amina.png",
    },
    {
      name: "Princess Echibudu",
      title: "Law Student, University of Jos",
      body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!",
      image: "/images/Princess.png",
    },*/
  ];
>>>>>>> 60b702ba3d1fcdefe49724d771b4053ee96ae22a

  return (
    <>
      <Container>
        <Stack width="100%">
          <Stack color={Colors.primary} p={"60px 0 0 0"}>
<<<<<<< HEAD
            <Text as="p" size={"16px"}>Testimonials</Text>
            <Text as="h4" p={"16px 0 34px 0"} size={"48px"} sm_size={"21px"}>Appreciated by Real People</Text>
          </Stack>
=======
            <Text as="p" size={"16px"}>
              Testimonials
            </Text>
            <Text as="h4" p={"16px 0 34px 0"} size={"48px"} sm_size={"21px"}>
              Appreciated by Real People
            </Text>
          </Stack>
          <div>
            {/* <Slider {...sliderSettings}> */}
              {testimonies.map((testimony, i) => {
                
                return (
                  // eslint-disable-next-line react/jsx-key
                  // <Slider {...sliderSettings}>
                  <Stack
                    className="testimonialCard"
                    direction="row"
                    p={"80px 100px 84px 100px"}
                    sm_p={"80px 10px 10px 10px"}
                    alignItems="center"
                    gap="24px"
                    md_p={"40px 40px 84px 40px"}
                    xm_direction="column"
                    key={i}
                  >
                    
                    <Stack>
                      <Image
                        src={testimony.image}
                        alt={testimony.name}
                        height="360px"
                        width="360px"
                        className="image"
                      />
                      <Text
                        as="h5"
                        className="text"
                        size="20px"
                        color={Colors.neutral}
                      >
                        {testimony.name}
                      </Text>
                      <Text as="p" size="14px" color={Colors.gray_600}>
                        {testimony.title}
                      </Text>
                    </Stack>
                    <Stack width="60%" p={"0 0 50px 0"} sm_width="100%">
                      <Text as="p" size="20px" color={Colors.neutral}>
                        {testimony.body}
                      </Text>
                    </Stack>
                    
                  </Stack>

                );
              
              })}
              

            {/* </Slider> */}
          </div>
>>>>>>> 60b702ba3d1fcdefe49724d771b4053ee96ae22a
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
