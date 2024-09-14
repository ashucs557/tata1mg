import * as Yup from "yup";
// const phoneRegExp = /^[6-9][0-9]{9}$/;
const phoneRegExp = /^(?!.*(\d)\1{3})[6-9][0-9]{9}$/;

export const leadSchema = Yup.object().shape({
  PatientName: Yup.string()
  .required("Please enter name")
  .matches(/^[a-zA-Z\s]+$/, 'Name must be characters.'),
  PhoneNumber: Yup.string()
    .required("Please enter number")
    .min(10, "Mobile number must have 10 digits.")
    .max(10, "Mobile number must have 10 digits.")
    .matches(phoneRegExp, 'Please enter valid mobile number.'),
  opt: Yup.boolean(),
  Otp: Yup.string()
    .required("Please enter OTP")
    .min(4, "OTP must be 4 digits.")
    .max(4, "OTP must be 4 digits.")
    .matches(/^[0-9]+$/, 'Input must be numbers only.'),
  City: Yup.string().required("Please select city"),
});
export const leadSchema2 = Yup.object().shape({
  PatientName: Yup.string()
  .required("Please enter name")
  .matches(/^[a-zA-Z\s]+$/, 'Name must be characters.'),
  PhoneNumber: Yup.string()
    .required("Please enter number")
    .min(10, "Mobile number must have 10 digits.")
    .max(10, "Mobile number must have 10 digits.")
    .matches(phoneRegExp, 'Please enter valid mobile number.'),
  opt: Yup.boolean(),
});
export const leadSchema3 = Yup.object().shape({
  PatientName: Yup.string()
  .required("Please enter name")
  .matches(/^[a-zA-Z\s]+$/, 'Name must be characters.'),
  PhoneNumber: Yup.string()
    .required("Please enter number")
    .min(10, "Mobile number must have 10 digits.")
    .max(10, "Mobile number must have 10 digits.")
    .matches(phoneRegExp, 'Please enter valid mobile number.'),
  opt: Yup.boolean(),
  City: Yup.string().required("Please select city"),
});
