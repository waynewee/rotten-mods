import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/school`;

const searchSchools = async (searchTerm: string) => {
  const query = queryString.stringify({
    s: searchTerm,
    page: 1,
    limit: 100,
  });
  const response = await axios.get(`${baseUrl}/?${query}`);
  return response.data;
};

const addSchool = async (schoolName) => {
  const response = await axios.post(
    baseUrl, 
    {"name" : schoolName},
    {
      withCredentials: true
    }
  );
  console.log(response);
  return response.data;
};

export default {
  searchSchools, addSchool
};
