import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/mod`;

const getModule = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const searchModule = async (
  searchTerm,
  limit = 10,
  page = 1,
  schoolId = "",
  semester = "",
  credit = ""
) => {
  const query = {
    searchTerm,
    page,
    limit,
    schoolId,
    semester,
    credit,
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
  semester?: number[];
  description: string;
  credit: number;
  workload: number;
  prereqs: string[];
}

const addModule = async (module: NewModule) => {
  await axios.post(baseUrl, module, { withCredentials: true });
};

export default { getModule, searchModule, addModule };
