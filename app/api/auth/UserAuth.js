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

export const signup = async (data) => {
  try {
    const response = await RequestHandler.post("/auth/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const logout = async (deviceToken) => {
  const data = {
    deviceToken,
  };
  const response = await RequestHandler.post("/auth/logout", data);
  return response;
};
