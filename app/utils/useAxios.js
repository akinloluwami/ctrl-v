import axios from "axios";

const baseURL = "http://192.168.124.249:1917";

const postData = async (route, payload) => {
  try {
    const response = await axios.post(`${baseURL}${route}`, payload);
    return response;
  } catch (err) {
    return err.response;
  }
};

const getData = async (route, payload, config) => {
  try {
    const response = await axios.get(`${baseURL}${route}`, payload, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export { postData, getData };
