import axios from "axios";

const baseURL = "http://192.168.221.249:1917";

const RequestHandler = axios.create({
  baseURL: baseURL,
  responseType: "json",
  withCredentials: true,
});

export default RequestHandler;
