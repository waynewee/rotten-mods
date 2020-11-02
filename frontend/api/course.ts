import axios from "axios";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/course`;

const getCourse = async (courseId) => {
  const response = await axios.get(`${baseUrl}/${courseId}`);
  return response.data;
};

export default { getCourse };
