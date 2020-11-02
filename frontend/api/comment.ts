import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/reply`;

const addComment = async (userId: string, text: string, reviewId: string) => {
  await axios.post(
    baseUrl,
    {
      userId,
      text,
      reviewId,
    },
    {
      withCredentials: true,
    }
  );
};

const getCommentsOfReview = async (reviewId) => {
  const query = queryString.stringify({ reviewId })
  const response = await axios.get(`${baseUrl}/?${query}`);
  return response.data;
};

export default {
  addComment,
  getCommentsOfReview,
};
