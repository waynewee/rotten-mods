import axios from "axios";
const baseUrl = "http://localhost:8080/api/user";

const getUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

export default {
  getUser,
};
