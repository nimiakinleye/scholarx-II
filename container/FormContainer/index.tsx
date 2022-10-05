import React from "react";
import { Container, Text, Stack, Button } from "../../components";
import { FormWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";

export default function Form() {
  return (
<FormWrapper>
<Stack p={"50px 20px 0"}>
      <form>
        <Stack direction="row" md_direction="column" gap={"16px"}>
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
      <textarea placeholder="input text here" cols={30} rows={10} />
     
      <Stack direction="row" justifyContent="center" m={"30px 0 50px 0"}>
              <Button width="auto" type="submit" color={Colors.yellow} text={Colors.neutral}>
                Submit
              </Button>
            </Stack>
    </Stack>
    
</FormWrapper>
      
  );
}
