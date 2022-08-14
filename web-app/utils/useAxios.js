import axios from "axios";

const baseURL = "http://localhost:1917";

const postData = async (url, payload, config) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, payload, config);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

const getData = async (url, payload, config) => {
  try {
    const response = await axios.get(`${baseURL}${url}`, config);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export { postData, getData };
