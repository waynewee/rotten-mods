import axios from "axios";
import queryString from "query-string";
const baseUrl = "http://localhost:8080/api/mod";

const getModule = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const searchModule = async (searchTerm, limit = 10, page = 1) => {
  const query = {
    s: searchTerm,
    page,
    limit,
  };

  const response = await axios.get(
    `${baseUrl}?${queryString.stringify(query)}`
  );
  return response.data;
};

interface NewModule {
  code: string;
  title: string;
  schoolId: string;
  semester: number[];
  description: string;
  credit: number;
  workload: number;
  prereqs: string[];
}
const addModule = async (module: NewModule) => {
  const response = await axios.post(baseUrl, module, { withCredentials: true });
  console.log(response);
};

export default { getModule, searchModule, addModule };
