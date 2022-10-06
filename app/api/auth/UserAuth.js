import { postData } from "../../utils/useAxios";

export const login = async (data) => {
  try {
    const response = await postData("/auth/login", data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const signup = async (data) => {
  try {
    const response = await postData("/auth/signup", data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const logout = async (deviceToken) => {
  const data = {
    deviceToken,
  };
  const response = await postData("/auth/logout", data);
  return response;
};
