import RequestHandler from "../RequestHandler";

export const login = async (email, password) => {
  try {
    const result = await RequestHandler("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      email,
      password,
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

const signup = async (email, password, confirmPassword) => {
  const data = {
    email,
    password,
    confirmPassword,
  };
  const response = await RequestHandler.post("/auth/signup", data);
  return response;
};
