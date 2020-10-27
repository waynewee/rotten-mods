import axios from "axios";
const loginBaseUrl = "http://localhost:8080/api/login";

const logIn = async (email, password) => {
  const response = await axios.post(
    loginBaseUrl,
    {
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
};
