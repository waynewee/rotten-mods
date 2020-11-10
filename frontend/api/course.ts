import axios from "axios";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/course`;

const getCourse = async (courseId) => {
  const response = await axios.get(`${baseUrl}/${courseId}`);
  return response.data;
};

const addCourse = async (courseName) => {
  const response = await axios.post(
    baseUrl, 
    {"name" : courseName},
    {
      withCredentials: true
    }
  );
  return response.data;
};

export default { getCourse, addCourse };
