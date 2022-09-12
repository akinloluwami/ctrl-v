import axios from "axios";

const baseURL = "https://ctrlvapp.herokuapp.com";

const RequestHandler = axios.create({
  baseURL: baseURL,
  responseType: "json",
  withCredentials: true,
});

export default RequestHandler;
