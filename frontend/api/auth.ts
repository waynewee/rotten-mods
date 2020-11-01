import axios from "axios";
const loginBaseUrl = "http://localhost:8080/api/login";
const userBaseUrl = "http://localhost:8080/api/user";

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
