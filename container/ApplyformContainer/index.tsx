import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Container, Stack } from "../../components";
import { ReferformWrapper } from "../ReferformContainer/styles/index.styles";
import Image from "next/image";
import { ReferHeroWrap } from "../ReferHeroContainer/styles/index.styles";
import holdinghands from "../../assets/images/hands-touching.png";
import { toast } from "react-toastify";
import { applySchema } from "../../helpers/ValidationSchema";

const initialInput = {
  name: "",
  email: "",
  linkedin: "",
}

export default function ApplyformContainer() {
  const router = useRouter();
  const { id } = router.query;
  const [resume, setresume] = useState<File | null>(null);
  const [cover_letter, setcover] = useState<File | null>(null);
  const [input, setInput] = useState({ ...initialInput })
  const [loading, setLoading] = useState(false)

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const acceptedFiles = ".doc,.docx,.pdf"

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    applySchema().validate(input)
      .then(() => {
        if (!resume) {
          return toast.error('You must upload a resume')
        }
        else if (!cover_letter) {
          return toast.error('You must upload a cover letter')
        }
        else {
          setLoading(true)
          if (id) {
            const form = document.getElementById('apply_form')?.getElementsByTagName('form')[0]
            const fd = new FormData(form!)
            axios
              .post(
                `https://api.scholarx.co/api/v1/applications/submit/${id}`,
                fd,
                {
                  headers: headers,
                }
              )
              .then((res) => {
                setLoading(false)
                const { msg } = res.data
                toast.success(msg)
                router.push('/careers')
              })
              .catch((err) => {
                setLoading(false)
                console.log(err);
                const { data } = err.response
                toast.error(data)
              });
          }
        }
      })
      .catch(err => {
        return toast.error(err.message)
      })
  };

  return (
    <>
      <Container className="content">
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Stack maxWidth="584px" width="100%" sm_alignItems="center" p="8px">
            <ReferformWrapper id="apply_form">
              <form onSubmit={handleSubmit}>
                <Stack p="2px" width="100%">
                  <label>Name</label>
                  <br />
                  <input
                    onChange={handleChange}
                    required
                    placeholder="E.g Bowale Adeniran"
                    type="text"
                    name="name"
                    value={input.name}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Email</label>
                  <br />
                  <input
                    required
                    onChange={handleChange}
                    placeholder="E.g adewale@gmail.com"
                    type="text"
                    name="email"
                    value={input.email}
                  />
                  <br />
                </Stack>
                <Stack p="2px" width="100%">
                  <label>Your LinkedIn account</label>
                  <br />
                  <input
                    required
                    onChange={handleChange}
                    placeholder="Input text here"
                    type="text"
                    name="linkedin"
                    value={input.linkedin}
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
                    accept={acceptedFiles}
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
                    accept={acceptedFiles}
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
