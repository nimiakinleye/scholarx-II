import React,{useState} from "react";
import axios from "axios";
import { Stack, Button } from "../../components";
import { FormWrapper } from "./styles/index.styles";
import { Colors } from "../../theme/colors";
//import * as yup from "yup";



export default function Form() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone_number, setNumber] = useState('');

  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      message,
      phone_number
    };
    console.log(data);
    

    axios
    .post('https://api.scholarx.co/api/v1/contact/submit', data)
    .then((response) => {
      console.log(response.data)
    });
  };
  return (
<FormWrapper>
<Stack p={"50px 20px 0"}>
      <form>
        <Stack direction="row" md_direction="column" gap={"16px"} sm_gap={"0"}>
          <Stack>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="first"
              name="first name"
              placeholder="input text here"
              onChange={e => setFirstName(e.target.value)}
            />
          </Stack>
          <Stack>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="last"
              name="last name"
              placeholder="input text here"
              onChange={e => setLastName(e.target.value)}
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
            onChange={e => setNumber(e.target.value)}
          />
        </Stack>
        <Stack>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="input text here"
            onChange={e => setEmail(e.target.value)}
          />
        </Stack>
      </form>
      <label htmlFor="help">How can we help you?</label>
      <textarea placeholder="input text here" cols={30} rows={10}  onChange={e => setMessage(e.target.value)}/>
     
      <Stack direction="row" justifyContent="center" m={"30px 0 50px 0"}>
              <Button width="auto" type="submit" color={Colors.yellow} text={Colors.neutral} onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
    </Stack>
    
</FormWrapper>
      
  );
}
