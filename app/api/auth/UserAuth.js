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

const signup = async (email, password) => {
  const data = {
    email,
    password,
  };
  const response = await RequestHandler.post("/auth/signup", data);
  return response;
};
