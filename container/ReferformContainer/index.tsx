import React from "react";
import { Button, Container, Stack } from "../../components";
import { ReferformWrapper } from "./styles/index.styles";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { ReferHeroWrap } from "../ReferHeroContainer/styles/index.styles";
import holdinghands from "../../assets/images/hands-touching.png";
import { referSchema } from "../../helpers/ValidationSchema";
import { toast } from "react-toastify";

const initialInput = {
  refs_name: "",
  your_email: "",
  refs_position: "",
  refs_email: "",
  refs_linkedin: ""
}

export default function ReferformContainer() {

  const router = useRouter();
  const { id } = router.query;
  const [resume, setresume] = useState<File | null>(null);
  const [input, setInput] = useState({ ...initialInput })
  const [loading, setLoading] = useState(false)

  const headers = {
    "Content-Type": "multipart/form-data"
  }

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    referSchema().validate(input)
      .then(() => {
        if (!resume) {
          return toast.error('You must upload a resume')
        }
        else {
          setLoading(true)
          if (id) {
            const form = document.getElementById('refer_form')?.getElementsByTagName('form')[0]
            const fd = new FormData(form!)
            axios
              .post(
                `https://api.scholarx.co/api/v1/referrals/submit/${id}`,
                fd, { headers: headers }
              )
              .then((res) => {
                const { msg } = res.data
                toast.success(msg)
                setLoading(false)
                // router.push("/careers");
              })
              .catch((err) => {
                setLoading(false)
                const { data } = err.response
                toast.error(data)
              });
          }
        }
      })
      .catch(err => {
        return toast.error(err.message)
      })
  }

  return (
    <>
      <Container className="content">
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Stack maxWidth="584px" width="100%" sm_alignItems="center" p="8px">
            <ReferformWrapper id="refer_form">
              <form>
                <Stack p="2px" width="100%">
                  <label htmlFor="name">Your friend’s name</label>
                  <br />
                  <input
                    required
                    placeholder="E.g  Bowale Adeniran"
                    type="text"
                    name="refs_name"
                    onChange={handleChange}
                    value={input.refs_name}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label htmlFor="Email-yours">Your Email </label>
                  <br />
                  <input
                    required
                    placeholder="E.g adewale@gmail.com"
                    type="email"
                    name="your_email"
                    onChange={handleChange}
                    value={input.your_email}
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
                    name="refs_position"
                    onChange={handleChange}
                    value={input.refs_position}
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
                    type="email"
                    name="refs_email"
                    onChange={handleChange}
                    value={input.refs_email}
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
                    name="refs_linkedin"
                    onChange={handleChange}
                    value={input.refs_linkedin}
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
                    accept=".doc,.docx,.pdf"
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
              <Button loading={loading} onClick={handleSubmit}>submit</Button>
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