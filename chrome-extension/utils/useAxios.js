import axios from "axios";

const baseURL = "https://ctrlvapp.herokuapp.com";

const postData = async (url, payload, config) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, payload, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

const getData = async (url, payload, config) => {
  try {
    const response = await axios.get(`${baseURL}${url}`, payload, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export { postData, getData };
