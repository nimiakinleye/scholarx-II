import React from "react";
import { HeaderContainer } from "..";
import { Container, Stack, Text } from "../../components";
import { Dropdown, Search } from "../../components";
import { Colors } from "../../theme/colors";
import { ReferHeroWrapper } from "../ReferHeroContainer/styles/index.styles";

export default function ApplyHeroContainer() {
  return (
    <>
      <ReferHeroWrapper>
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
                  Join a team of problem solvers who are working tirelessly to
                  create endless paths to education.
                </Text>
                <Stack
                  m="1.5rem 0 0 0"
                  direction="row"
                  justifyContent={"space-between"}
                >
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </ReferHeroWrapper>
    </>
  );
}
