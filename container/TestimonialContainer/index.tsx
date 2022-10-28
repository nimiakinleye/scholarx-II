import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Container, Stack, Text } from "../../components";
import { TestimonialWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import Femi from "../../assets/images/Femi.png";

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonies = [
    { name: "Olawore Oluwafemi", title: "Law Student, University of Ibadan", body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!", image: "/images/Femi.png" },
    //{ name: "Omoshalewa Ibinabo", title: "Law Student, University of Jos", body: " I didn't even know where to start as far as scholarships go but ScholarX has made it easy for me. I am now a recipient now a scholarship that pays my tuition in uni yearly. All thanks to ScholarX!", image: "/images/Femi.png" },

  ]
  
  return (
    <TestimonialWrapper>
      <Container>
        <Stack width="100%">
          <Stack color={Colors.primary} p={"60px 0 0 0"}>
            <Text as="p" size={"16px"}>Testimonials</Text>
            <Text as="h4" p={"16px 0 34px 0"} size={"48px"} sm_size={"21px"}>Appreciated by Real People</Text>
          </Stack>
          <Stack className="testimonialCard" width="100%">
            
            {testimonies.map((testimony, i) => {
          return(
          <Stack direction="row" p={"80px 100px 84px 100px"} sm_p={"80px 10px 10px 10px"} alignItems="center" gap="24px"  md_p={"40px 40px 84px 40px"} xm_direction="column" key={i}>
              <Stack>
                <Image src={testimony.image} alt={testimony.name} height="360px" width="360px" className="image"/>
                <Text as="h5" className="text" size="20px" color={Colors.neutral}>{testimony.name}</Text>
                <Text as="p" size="14px" color={Colors.gray_600}>{testimony.title}</Text>
              </Stack>
              <Stack width="60%" p={"0 0 50px 0"} sm_width="100%">
                <Text as="p" size="20px" color={Colors.neutral}>
                 {testimony.body}
                </Text>
              </Stack>
            </Stack>
          )
          
        })}
    
        
            
          </Stack>
        </Stack>
      </Container>
    </TestimonialWrapper>
  );
}
