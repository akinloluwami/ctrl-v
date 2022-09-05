import RequestHandler from "../RequestHandler";

export const getTexts = async (JWT, deviceToken) => {
  try {
    const result = await RequestHandler("/text", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      params: {
        deviceToken: deviceToken,
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

export const getLinks = async (JWT, deviceToken) => {
  try {
    const result = await RequestHandler("/link", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      params: {
        deviceToken: deviceToken,
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};
