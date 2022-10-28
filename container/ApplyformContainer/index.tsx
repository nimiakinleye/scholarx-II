import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Container, Stack } from "../../components";
import { ReferformWrapper } from "../ReferformContainer/styles/index.styles";
import Image from "next/image";
import { ReferHeroWrap } from "../ReferHeroContainer/styles/index.styles";
import holdinghands from "../../assets/images/hands-touching.png";

export default function ApplyformContainer() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [resume, setresume] = useState<File | null>(null);
  const [linkedin, setlinkedin] = useState("");
  const [cover_letter, setcover] = useState<File | null>(null);

  const data = {
    name,
    email,
    resume,
    linkedin,
    cover_letter,
  };

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  console.log(resume);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (id) {
      axios
        .post(
          `https://api.scholarx.co/api/v1/applications/submit/${id}`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);
          router.push('/careers')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Container className="content">
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Stack maxWidth="584px" width="100%" sm_alignItems="center" p="8px">
            <ReferformWrapper>
              <form>
                <Stack p="2px" width="100%">
                  <label>Name</label>
                  <br />
                  <input
                    onChange={(e) => setname(e.target.value)}
                    required
                    placeholder="E.g Bowale Adeniran"
                    type="text"
                    name="name"
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Email</label>
                  <br />
                  <input
                    required
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="E.g adewale@gmail.com"
                    type="text"
                    name="E.g adewale@gmail.com"
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Your LinkedIn account</label>
                  <br />
                  <input
                    required
                    onChange={(e) => setlinkedin(e.target.value)}
                    placeholder="Input text
                  here"
                    type="text"
                    name="Email"
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Resume/CV</label>
                  <br />
                  <input
                    required
                    onChange={(e) => {
                      if (e.target.files != null) {
                        setresume(e.target.files[0]);
                      }
                    }}
                    placeholder="Upload files here"
                    type="file"
                    name="resume"
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Cover letter</label>
                  <br />
                  <input
                    required
                    onChange={(e) => {
                      if (e.target.files != null) {
                        setcover(e.target.files[0]);
                      }
                    }}
                    placeholder="Upload files here"
                    type="file"
                    name="cover_letter"
                  />
                  <br />
                </Stack>
              </form>
            </ReferformWrapper>
            <Stack
              width={"100%"}
              alignItems={"center"}
              p={"1rem 0 3rem 0"}
            >
              <Button onClick={handleSubmit}>submit</Button>
            </Stack>
          </Stack>
          <ReferHeroWrap>
            <Image src={holdinghands} alt="laptop" />
          </ReferHeroWrap>
        </Stack>
      </Container>
    </>
  );
}
