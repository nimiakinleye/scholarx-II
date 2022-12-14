import { string, object, number } from "yup";

export const applySchema = () => {
  return object({
    linkedin: string()
      .required("Linkedin url field should not be empty")
      .url("Linkedin url is invalid"),
    email: string()
      .required("Email field should not be empty")
      .email("Email is invalid"),
    name: string().required("Name field should not be empty"),
  });
};

export const referSchema = () => {
  return object({
    refs_linkedin: string()
      .required("Linkedin url field should not be empty")
      .url("Linkedin url is invalid"),
    refs_email: string()
      .required("Ref. email field should not be empty")
      .email("Ref. email is invalid"),
    refs_position: string().required("Position field should not be empty"),
    your_email: string()
      .required("Your email field should not be empty")
      .email("Your email is invalid"),
    refs_name: string().required("Name field should not be empty"),
  });
};

export const contactSchema = () => {
  return object({
    message: string().required('Message is required'),
    email: string().required('Email is required').email('Email is invalid'),
    phone_number: string().required('Number is required').min(11, 'Phone number is invalid').max(11, 'Phone number is invalid'),
    lastname: string().required('Last name is required'),
    firstname: string().required('First name is required'),
  });
};
