import React from "react";
import Image from "next/image";
import { HeaderContainer } from "..";
import { Button, Container, Stack, Text } from "../../components";
import { Dropdown, Search } from "../../components";
import { Colors } from "../../theme/colors";
import { CareerHeroWrapper, CareerHeroWrap } from "./styles/index.styles";
//import laptopguy from "../../assets/images/holding_laptop.png";


export default function CareerHeroContainer() {
  return (
    <>
      <CareerHeroWrapper>
        <Container className="content">
          <Stack width="100%">
            <Stack m={"77px 0 0 0"}>
              <HeaderContainer />
            </Stack>
            <Stack md_width={"100%"} width="60%" gap="24px" color={"#fff"}>
              <Stack gap="24px" color={Colors.white} m="2.5rem 0 2.5rem 0">
                <Text fontweight="700" size={"64px"} as="h3">
                  <span>Come join us today.</span>
                </Text>
                <Text fontweight="500" size="32px" lineHeight="48px">
                  At ScholarX, the future is yours for the taking. Come help us
                  empower youths across Africa.
                </Text>
                <Stack
                  m="1.5rem 0 0 0"
                  direction="row"
                  justifyContent={"space-between"}
                >
                  <Stack direction="row" sm_direction="column" gap="16px">
                    <Search />
                    <Dropdown />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </CareerHeroWrapper>
    </>
  );
}
