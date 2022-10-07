import React from "react";
import { Button, Container, Stack } from "../../components";
import {ReferformWrapper} from "./styles/index.styles";

export default function ReferformContainer(){
    
    const formlists = [
      {
        label: "Your friend’s name",
        placeholder: "E.g  Bowale Adeniran",
        name: "name",
        type: "text",
      },
      {
        label: "Your Email",
        placeholder: "E.g adewale@gmail.com",
        name: "Email",
        type: "text",
      },
      {
        label: "What position would fit your friend?",
        placeholder: "E.g FrontEnd  Developer",
        name: "position",
        type: "text",
      },
      {
        label: "Your friend's Email",
        placeholder: "E.g adewale@gmail.com",
        name: "Email",
        type: "text",
      },
      {
        label: "Your friend's LinkedIn account",
        placeholder: "Copy URL to this place",
        name: "url",
        type: "text",
      },
      {
        label: "Your friend's CV",
        placeholder: "Upload files here",
        name: "resume",
        type: "file",
      },
    ];

    const formcomp = formlists.map(
      (
        forms: {
          label: string;
          placeholder: string;
          name: string;
          type: string;
        },
        i
      ) => {
        return (
          <form>
            <Stack p="2px" width="100%">
              <label key={i}>{forms.label}</label>
              <br />
              <input
                placeholder={forms.placeholder}
                type={forms.type}
                name={forms.name}
              />
              <br />
            </Stack>
          </form>
        );
      }
    );
    return (
      <>
        <Container className="content">
          <Stack width="100%">
            <ReferformWrapper>
              {formcomp}
              <Stack alignItems={"center"} p={"1rem 0 3rem 0"}>
                <Button>submit</Button>
              </Stack>
            </ReferformWrapper>
          </Stack>
        </Container>
      </>
    );
}