import React from "react";
import { Button, Container, Stack } from "../../components";
import { ReferformWrapper } from "../ReferformContainer/styles/index.styles";

export default function ApplyformContainer() {
  const formlists = [
    {
      label: "Name",
      placeholder: "E.g  Bowale Adeniran",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "E.g adewale@gmail.com",
      name: "Email",
      type: "text",
    },
    {
      label: "Your LinkedIn account",
      placeholder: "Input text here",
      name: "Email",
      type: "text",
    },
    {
      label: "Resume/CV",
      placeholder: "Upload files here",
      name: "resume",
      type: "file",
    },
    {
      label: "Cover letter",
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
          <ReferformWrapper>{formcomp}</ReferformWrapper>
          <Stack md_width={"100%"} width={"55%"} alignItems={"center"} p={"1rem 0 3rem 0"}>
            <Button>submit</Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}