import React from "react";
import { Container, Text, Stack } from "../../components";
import { ContactWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import Form from "../FormContainer";

export default function Contact() {
  return (
    <ContactWrapper>
      <Container >
        <Stack direction="row" m={"80px 0 0 0"} gap={"80px"}>
          <Stack className="contact-text">
            <Text as="h3" weight={"700"} color={"#00001A"} p={"0 0 40px 0"}>Contact Us</Text>
            <Text as="p" color={Colors.neutral} size={"18px"} p={"0 0 20px 0"}>
              We are located at 1 Akinwunmi street, Yaba, Lagos.
            </Text>
            <Text as="p" size={"18px"}>
              However, to help us prepare for your coming, kindly complete the
              form on the right to connect with a member of our team.
            </Text>
          </Stack>
          <Stack className="form">
            <Form/>
          </Stack>
        </Stack>
      </Container>
    </ContactWrapper>
  );
}
