import axios from "axios";
const baseUrl = "http://localhost:8080/api/bookmark";

const getBookmarks = async (userId) => {
  const response = await axios.get(`${baseUrl}/user/${userId}`, {
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
