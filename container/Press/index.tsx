import { Text, Stack, Container } from "../../components";
import { PressWrapper } from "./styles/index.styles";
import BusinessDay from "../../assets/images/business-day.png";
import Disrupt from "../../assets/images/disrupt.png";
import GSMA from "../../assets/images/GSMA.png";
import BBC from "../../assets/images/bbc.png";
import TechCabal from "../../assets/images/tech-cabal.png";
import Image from "next/image";
import { Colors } from "../../theme/colors";

export default function PressContainer() {
  const images = [
    {
      file: BusinessDay,
      link: "https://businessday.ng/news/article/scholarx-partners-airtel-to-launch-mobile-learning-platform/",
    },
    {
      file: Disrupt,
      link: "https://disrupt-africa.com/2021/04/13/nigerian-ed-tech-startup-scholarx-partners-airtel-to-launch-mobile-learning-platform/",
    },
    {
      file: GSMA,
      link: "https://www.gsma.com/mobilefordevelopment/m/scholarx/",
    },
    { file: BBC, 
      link: "https://www.bbc.com/yoruba/afrika-59752447" },
    {
      file: TechCabal,
      link: "https://techcabal.com/2021/10/19/learnam-wants-to-provide-digital-literacy-for-africans/",
    },
  ];
  const mapImages = images.map((image, i) => {
    return (
      <Stack width={"100px"} alignItems="center" key={i}>
        <a href={image.link} target="_blank" rel="noreferrer">
          <Image src={image.file} alt=""/>
        </a>
      </Stack>
    );
  });
  return (
    <PressWrapper data-aos="zoom-in-down" className="container">
      <Container>
        <Stack>
        <Text as="h1" color={Colors.primary}>
        We have been featured on
      </Text>
      <Stack
        m="48px 0 0 0"
        direction="row"
        xm_direction="column"
        justifyContent="center"
        sm_gap="32px"
        gap="81px"
        alignItems="center"
        width={"100%"}
      >
        {mapImages}
      </Stack>
        </Stack>
      </Container>
      

    </PressWrapper>
  );
}
