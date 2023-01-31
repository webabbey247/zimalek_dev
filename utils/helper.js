import axios from "axios";
import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

const config = require("../package.json").projectConfig;
const BACKEND_BASE_URL = config.backendApiBaseUrl;

const axiosRes = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

const contactValidationSchema = yup.object().shape({
  fullName: yup.string().trim().required("Kindly provide your full name!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .test("name", "Kindly provide a valid mobile number!", (value) =>
      isValidPhoneNumber(value || "")
    )
    .required("Field required")
    .nullable(),
  enquiry: yup
    .string()
    .trim()
    .required("Kindly explain more about your enquiries!"),
});

const SubscribeValidationSchema = yup.object().shape({
  mailingAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
});

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

export {
  axiosRes,
  contactValidationSchema,
  SubscribeValidationSchema,
  removeTags,
};
