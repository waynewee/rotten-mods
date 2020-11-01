import axios from "axios";
import queryString from "query-string";
const baseUrl = "http://localhost:8080/api/school";

const searchSchools = async (searchTerm: string) => {
  const query = queryString.stringify({
    s: searchTerm,
    page: 1,
    limit: 100,
  });
  const response = await axios.get(`${baseUrl}/?${query}`);
  return response.data;
};

export default {
  searchSchools,
};
