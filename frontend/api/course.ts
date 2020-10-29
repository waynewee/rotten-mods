import axios from "axios";
const baseUrl = "http://localhost:8080/api/course";

const getCourse = async (courseId) => {
  const response = await axios.get(`${baseUrl}/${courseId}`);
  return response.data;
};



export default { getCourse };
