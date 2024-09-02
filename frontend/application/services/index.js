import axios from "axios";
// Alterar o IP para o IPV4 da sua máquina
const API_URL = "http://192.168.100.13:3333";

//================================================================
export const login = async ({ email, password }) => {
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

//================================================================
export const signUp = async ({ Fname, Lname, email, password }) => {
  try {
    const response = await axios.post(API_URL + "/cadastrar", {
      Fname,
      Lname,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

//================================================================
export const getRestaurants = async () => {
  try {
    const response = await axios.get(API_URL + "/restaurantes");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
