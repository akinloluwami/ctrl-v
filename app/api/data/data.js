import RequestHandler from "../RequestHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

// const deviceToken = AsyncStorage.getItem("deviceToken");
// const JWT = AsyncStorage.getItem("token");

export const getTexts = async () => {
  try {
    const result = await RequestHandler("/text", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
      params: {
        deviceToken: await AsyncStorage.getItem("deviceToken"),
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

export const getLinks = async () => {
  try {
    const result = await RequestHandler("/link", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
      params: {
        deviceToken: await AsyncStorage.getItem("deviceToken"),
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

export const sendLink = async (JWT, deviceToken, data) => {
  try {
    const response = await RequestHandler.post("/link", data, {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      params: {
        deviceToken: deviceToken,
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const sendText = async (JWT, deviceToken, data) => {
  try {
    const response = await RequestHandler.post("/text", data, {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
      params: {
        deviceToken: deviceToken,
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
