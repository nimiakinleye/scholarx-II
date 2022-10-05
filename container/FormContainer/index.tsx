import React from "react";
import { Container, Text, Stack, Button } from "../../components";
import { FormWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";

export default function Form() {
  return (

      <Stack p={"10px"}>
      <form>
        <Stack direction="row" sm_direction="column" >
          <Stack>
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              name="first name"
              placeholder="input text here"
            />
          </Stack>
          <Stack>
            <label htmlFor="first">Last Name</label>
            <input
              type="text"
              id="last"
              name="last name"
              placeholder="input text here"
            />
          </Stack>
        </Stack>
        <Stack>
          <label htmlFor="phone number">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone number"
            placeholder="input text here"
          />
        </Stack>
        <Stack>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="input text here"
          />
        </Stack>
      </form>
      <label htmlFor="help">How can we help you?</label>
      <textarea placeholder="input text here" />
      {/* <Button
        type="submit"
        width={"124px"}
        height={"44px"}
        background-color={Colors.yellow}
        color={Colors.yellow}
      /> */}
      <Stack direction="row" justifyContent="center">
              <Button width="124px" type="submit" color={Colors.yellow} text={Colors.neutral}>
                Submit
              </Button>
            </Stack>
    </Stack>
    
  );
}
