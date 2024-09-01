import axios from "axios";
const API_URL = "http://192.168.100.13:3333";

export const login = async ({ email, password }) => {
  //   return axios.post("/login", { email, password });
  try {
    const response = await axios.post(API_URL + "/login", {
      email,
      password,
    });
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};
