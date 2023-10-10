import * as yup from "yup";

export const createEmployeeSchema = yup.object().shape({
  fullName: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  address: yup.string().required("Address is required"),
});
