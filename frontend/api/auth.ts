import axios from "axios";
import { serverDomain } from "../config";

const loginBaseUrl = `${serverDomain}/api/login`;
const logoutBaseUrl = `${serverDomain}/api/logout`;
const userBaseUrl = `${serverDomain}/api/user`;

const logIn = async (email, password) => {
  const response = await axios.post(loginBaseUrl, {
    email,
    password,
  });

  return response.data;
};

const logOut = async () => {
  const response = await axios.post(logoutBaseUrl);
  return response;
};

const signUp = async (
  name,
  email,
  password,
) => {
  const response = await axios.post(
    userBaseUrl,
    {
      name,
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export default {
  logIn,
  signUp,
  logOut,
};
