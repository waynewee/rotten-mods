import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/recommendation`;

const getRecommendedModules = async (userId) => {
  const type = "similarity";
  const queryRecomendationType = queryString.stringify({ type });
  const queryUserId = queryString.stringify({ userId });
  const response = await axios.get(
    `${baseUrl}/?${queryRecomendationType}&${queryUserId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const getMostRatedModules = async () => {
  const type = "most-rated";
  const queryRecomendationType = queryString.stringify({ type });
  const response = await axios.get(`${baseUrl}/?${queryRecomendationType}`, {
    withCredentials: true,
  });
  return response.data;
};

const getMostViewedModules = async () => {
  const type = "most-viewed";
  const queryRecomendationType = queryString.stringify({ type });
  const response = await axios.get(`${baseUrl}/?${queryRecomendationType}`, {
    withCredentials: true,
  });
  return response.data;
};

export default {
  getRecommendedModules,
  getMostRatedModules,
  getMostViewedModules,
};
