import RequestHandler from "../RequestHandler";

export const login = async (data) => {
  try {
    const result = await RequestHandler("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

export const signup = async (name, email, password, confirmPassword) => {
  const data = { name, email, password, confirmPassword };
  const response = await RequestHandler.post("/auth/signup", data);
  return response;
};

export const logout = async (deviceToken) => {
  const data = {
    deviceToken,
  };
  const response = await RequestHandler.post("/auth/logout", data);
  return response;
};
