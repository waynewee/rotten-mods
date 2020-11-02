import axios from "axios";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/user`;

const getUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

export default {
  getUser,
};
