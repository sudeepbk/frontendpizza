import * as yup from "yup";

const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
const stateRegex = /^[A-Z]{2}/;

const JobApplicationSchema = yup.object().shape({
  firstName: yup.string().label("First Name").required("Required"),
  //   lastName: yup.string().required().label("Last Name").required,
  address: yup.string().label("Address 1").required,
  secAddress: yup.string().label("Address 2").required,
  city: yup.string().label("City").required(),
  state: yup
    .string()
    .label("State")
    .trim()
    .matches(stateRegex, "Invalid State")
    .required(),
  zipCode: yup.number().label("Zip code").required(),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneNumberRegex, "Please enter a valid phone number xxx-xxx-xxxx")
    .required()
    .label("Phone Number"),
  price: yup.number().required().label("price"),
});

export default JobApplicationSchema;
