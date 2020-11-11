import axios from "axios";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/user`;

const getUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const updateUser = async (newUserDetails , userId) => {
  console.log("the user received is");
  console.log(newUserDetails);
  const response = await axios.put(`${baseUrl}/${userId}`, newUserDetails, {
    withCredentials: true,
  });
  console.log("the update response")
  console.log(response);
  return response.data
}



export default {
  getUser, updateUser
};
