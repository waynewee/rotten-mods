import axios from "axios";
const baseUrl = "http://localhost:8080/api/reply";

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
  const response = await axios.get(`${baseUrl}/review/${reviewId}`);
  return response.data;
};

export default {
  addComment,
  getCommentsOfReview,
};
