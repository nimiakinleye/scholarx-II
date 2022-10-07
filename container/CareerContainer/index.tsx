import React from "react";
import { Stack, Text } from "../../components";
import { Colors } from "../../theme/colors";
import CareerCard  from "../../container/CareerCard/index";
import {Container} from "../../components";
import careercard from "../../assets/images/CareerContact.png"
import Image from "next/image";

export default function CareerContainer(){
    return (
      <>
        <Container className="content">
          <>
            <Stack width="100%" m={"20px 0 10px 0"}>
              <Text
                size={"32px"}
                fontweight={"700"}
                lineHeight={"48px"}
                color={Colors.primary}
              >
                Open roles today
              </Text>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return <CareerCard key={i} />;
              })}
            </Stack>
            <Stack m={"0 0 20px 0"} width="75%">
              <Image src={careercard}></Image>
            </Stack>
          </>
        </Container>
      </>
    );
}