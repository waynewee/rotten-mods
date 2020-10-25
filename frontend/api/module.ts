import axios from "axios";
import queryString from "query-string";
const baseUrl = "http://localhost:8080/api/mod";

const getModule = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const searchModule = async (searchTerm) => {
  const query = {
    s: searchTerm,
    page: 1,
    limit: 10,
  };

  const response = await axios.get(
    `${baseUrl}?${queryString.stringify(query)}`
  );
  return response.data;
};

export default { getModule, searchModule };
