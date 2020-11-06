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

  console.log(response);

  return response.data;
};

const logOut = async () => {
  const response = await axios.get(logoutBaseUrl);
  return response;
}

const signUp = async (
  name,
  email,
  password,
  schoolId,
  courseId,
  currentYear
) => {
  const response = await axios.post(
    userBaseUrl,
    {
      name,
      email,
      password,
      schoolId,
      courseId,
      currentYear,
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
  logOut
};
