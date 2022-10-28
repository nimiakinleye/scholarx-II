import React from "react";
import { Button, Container, Stack, Text } from "../../components";
import { InnerSubscribeWrapper, SubscribeWrapper } from "./styles/index.styles";

export default function SubscribeContainer() {
  return (
    <SubscribeWrapper>
      <Container>
        <InnerSubscribeWrapper>
          <div className="circle">
            <svg width="78" height="62" viewBox="0 0 78 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 14.3335L34.3775 36.2518C37.1767 38.1179 40.8233 38.1179 43.6225 36.2518L76.5 14.3335M9.83333 60.1668H68.1667C72.769 60.1668 76.5 56.4359 76.5 51.8335V10.1668C76.5 5.56446 72.769 1.8335 68.1667 1.8335H9.83333C5.23096 1.8335 1.5 5.56446 1.5 10.1668V51.8335C1.5 56.4359 5.23096 60.1668 9.83333 60.1668Z" stroke="#000080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Stack width="100%" justifyContent="space-between" gap="12px" sm_alignItems="center" direction="column">
            <Text textalign="left">Subscribe To Our Newsletter</Text>
            <input placeholder="Enter your email" />
            <Stack direction="row" justifyContent="flex-start" sm_justifyContent="center">
              <Button width="auto">
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </InnerSubscribeWrapper>
      </Container>
    </SubscribeWrapper>
  );
}