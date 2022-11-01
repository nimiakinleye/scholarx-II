import React, { useState } from "react";
import axios from "axios";
import { Stack, Button } from "../../components";
import { FormWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
import { contactSchema } from "../../helpers/ValidationSchema";
import { toast } from "react-toastify";
//import * as yup from "yup";

const initialInput = {
  firstname: "",
  lastname: "",
  phone_number: "",
  email: "",
  message: "",
}

export default function Form() {
  const [input, setInput] = useState({ ...initialInput })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    contactSchema().validate(input)
      .then(() => {
        setLoading(true)
        axios
          .post('https://api.scholarx.co/api/v1/contact/submit', { ...input })
          .then((res) => {
            setLoading(false)
            const { msg } = res.data
            toast.success(msg)
          })
          .catch(err => {
            setLoading(false)
            const { data } = err.response
            toast.error(data)
          })
      })
      .catch(err => {
        toast.error(err.message)
      })
  };
  return (
    <FormWrapper>
      <Stack p={"50px 20px 0"}>
        <form>
          <Stack m="16px 0" direction="row" justifyContent="space-between" md_direction="column" gap={"16px"} sm_gap={"16px"}>
            <Stack width="100%">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="first"
                name="firstname"
                placeholder="Input first name"
                onChange={handleChange}
              />
            </Stack>
            <Stack width="100%">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="last"
                name="lastname"
                placeholder="Input last name"
                onChange={handleChange}
              />
            </Stack>
          </Stack>
          <Stack m="16px 0">
            <label htmlFor="phone number">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone_number"
              placeholder="Input Phone Number"
              onChange={handleChange}
            />
          </Stack>
          <Stack m="16px 0">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input Email"
              onChange={handleChange}
            />
          </Stack>
          <Stack m="16px 0">
          <label htmlFor="help">How can we help you?</label>
        <textarea placeholder="Input message" cols={30} rows={10} name="message" onChange={handleChange} />
          </Stack>
        </form>
       

        <Stack direction="row" justifyContent="center" m={"30px 0 50px 0"}>
          <Button loading={loading} width="auto" type="submit" color={Colors.yellow} text={Colors.neutral} onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Stack>

    </FormWrapper>

  );
}
