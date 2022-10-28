import React from "react";
import { Button, Container, Stack } from "../../components";
import { ReferformWrapper } from "./styles/index.styles";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { ReferHeroWrap } from "../ReferHeroContainer/styles/index.styles";
import holdinghands from "../../assets/images/hands-touching.png";

export default function ReferformContainer() {

  const router = useRouter();
  const { id } = router.query;
  const [refs_name, setname] = useState("");
  const [your_email, setyouremail] = useState("");
  const [refs_email, setemail] = useState("");
  const [resume, setresume] = useState<File | null>(null);
  const [refs_linkedin, setlinkedinurl] = useState("");
  const [refs_position, setposition] = useState("");
  const data = {
    refs_name,
    your_email,
    refs_position,
    refs_email,
    refs_linkedin,
    resume
  };
  const headers = {
    "Content-Type": "multipart/form-data"
  }

  console.log(resume);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (id) {
      axios
        .post(
          `https://api.scholarx.co/api/v1/referrals/submit/${id}`,
          data, { headers: headers }
        )
        .then((res) => {
          console.log(res);
          router.push("/careers");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <Container className="content">
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Stack maxWidth="584px" width="100%" sm_alignItems="center" p="8px">
            <ReferformWrapper>
              <form>
                <Stack p="2px" width="100%">
                  <label htmlFor="name">Your friend’s name</label>
                  <br />
                  <input
                    required
                    placeholder="E.g  Bowale Adeniran"
                    type="text"
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="Email-yours">Your Email </label>
                  <br />
                  <input
                    required
                    placeholder="E.g adewale@gmail.com"
                    type="text"
                    name="Email"
                    onChange={(e) => setyouremail(e.target.value)}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="position">
                    What position would fit your friend?
                  </label>
                  <br />
                  <input
                    required
                    placeholder="E.g
                    FrontEnd Developer"
                    type="text"
                    name="position"
                    onChange={(e) => setposition(e.target.value)}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="Email">Your friend's Email</label>
                  <br />
                  <input
                    required
                    placeholder="E.g
                    adewale@gmail.com"
                    type="text"
                    name="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="url">Your friend's LinkedIn account</label>
                  <br />
                  <input
                    required
                    placeholder="Copy URL to
                    this place"
                    type="text"
                    name="url"
                    onChange={(e) => setlinkedinurl(e.target.value)}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="resume">Your friend's CV</label>
                  <br />
                  <input
                    required
                    placeholder="Upload files here"
                    type="file"
                    name="resume"
                    onChange={(e) => { if (e.target.files != null) { setresume(e.target.files[0]) } }}
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