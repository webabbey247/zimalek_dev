import axios from "axios";
import * as yup from "yup";

const config = require('../package.json').projectConfig;
const BACKEND_BASE_URL = config.backendApiBaseUrl;

export const axiosRes = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export const contactValidationSchema = yup.object().shape({
  fullName: yup.string().trim().required("Kindly provide your full name!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .trim()
    .required("Kindly provide a valid mobile number!"),
  enquiry: yup
    .string()
    .trim()
    .required("Kindly explain more about your enquiries!"),
});

export const SubscribeValidationSchema = yup.object().shape({
  mailingAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!")
});

export function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}


