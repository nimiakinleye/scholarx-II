import React from "react";
import Image from "next/image";
import { Container, Stack, Text } from "../../components";
// import img1 from "../../assets/images/ikorodu-img1.png";
// import img2 from "../../assets/images/ikorodu-img2.png";
// import img3 from "../../assets/images/ikorodu-img3.png";
import { Wrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";


export default function IkoroduDetails() {
  return (
    <Wrapper>
    <Container>
      <Stack>
        
        <Stack className="text">
          <Text as="h4" size="24px" p={"0 0 32px 0"}>The Ikorodu Call.</Text>
          <Text as="p" size="20px" color={Colors.neutral} p={"0 0 80px 0"}>
            On the 6th day in November 2021, we journeyed to the famous and
            infamous town of Ikorodu. Despite the widely spread belief that it
            is one of the most remote areas of Lagos, we answered its overdue
            call. We arrived Ladega market of Ikorodu by 8 am prompt in our
            conspicuous LearnAM apparel. It was clear that the aura emanating
            from the community was disinterest in what we had to offer.
            Thankfully, the clear sky at the time was most likely the force that
            transformed the apathy we felt from the populace into intense
            curiosity.
          </Text>
        </Stack>
        <Stack direction="row" gap="24px">
          <Stack>
            {/* <Image src={"../../assets/images/ikorodu-img1.png"} alt="aerial view of Ikorodu" /> */}
          </Stack>
          <Stack>
            {/* <Image
              src={"../../assets/images/ikorodu-img2.png"}
              alt="a ScholarX employee showing the app to a woman"
            /> */}
          </Stack>
          <Stack>
            {/* <Image src={"../../assets/images/ikorodu-img2.png"} alt="a ScholarX employee" /> */}
          </Stack>
        </Stack>
        <Stack p={"96px 0 0 0"}>
          <Text as="h4" size="24px">The good people of Ladega</Text>
          <Text as="p" size="20px" p={"32px 0 0 0"} color={Colors.neutral}>
            Of all the individuals we encountered at Ladega market, our
            experience with three people stood out. A lemon seller from Niger,
            the largest state in Nigeria, a south-western sister who just wanted
            to ‘sell her market’ and, the Igbo gentleman who was visibly
            fascinated by the accurateness of the translated learning resources.
            Umaru, Remi, and Mr. Nwadike who are obviously from different
            backgrounds found a common ground with LearnAM. The realization that
            a small app on their smartphones could speak to them in their
            language and the heights they could reach with the app was
            fascinating to watch.
          </Text>
        </Stack>
        <Stack>
          <Text as="h4" size="24px" p={"32px 0 32px 0"}>Inclusiveness and Empathy might just be the key</Text>
          <Text as="p" size="20px" color={Colors.neutral}>
            After our visit to Ikorodu, we could not help but take pride in our
            efforts and achievements. LearnAM had started to rub off on people
            positively. It was refreshing to see that inclusiveness and empathy
            were the key ingredients that we used to warm our way into the
            hearts of the Ikorodu people.
          </Text>
        </Stack>
      </Stack>
    </Container>
    </Wrapper>
  );
}
