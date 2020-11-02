import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/bookmark`;

const getBookmarks = async (userId) => {
  const query = queryString.stringify({ userId });
  const response = await axios.get(`${baseUrl}/?${query}`, {
    withCredentials: true,
  });
  return response.data;
};

const addBookmark = async (userId, modId) => {
  await axios.post(
    `${baseUrl}`,
    {
      userId,
      modId,
    },
    {
      withCredentials: true,
    }
  );
};

const deleteBookmark = async (bookmarkId) => {
  await axios.delete(`${baseUrl}/${bookmarkId}`, {
    withCredentials: true,
  });
};

export default {
  getBookmarks,
  addBookmark,
  deleteBookmark,
};
