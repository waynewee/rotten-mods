import axios from "axios";
const baseUrl = "http://localhost:8080/api/bookmark";

const getBookmarks = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const addBookmark = async (userId, modId) => {
  await axios.post(`${baseUrl}`, {
    modId,
  });
};

const deleteBookmark = async (bookmarkId) => {
  await axios.delete(`${baseUrl}/${bookmarkId}`);
};

export default {
  getBookmarks,
  addBookmark,
  deleteBookmark,
};
