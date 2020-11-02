import axios from "axios";
import { serverDomain } from "../config";

const loginBaseUrl = `${serverDomain}/api/login`;
const userBaseUrl = `${serverDomain}/api/user`;

const logIn = async (email, password) => {
  const response = await axios.post(loginBaseUrl, {
    email,
    password,
  });

  return response.data;
};

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
};
