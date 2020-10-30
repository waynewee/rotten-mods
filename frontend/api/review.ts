import axios from "axios";
import queryString from "query-string";

const reviewBaseUrl = "http://localhost:8080/api/review";
const ratingBaseUrl = "http://localhost:8080/api/rating";

interface ReviewToSubmit {
  text: string;
  semesterTaken: number;
  acadYearTaken: string;
  // workload: number;
}

const getReviewsOfModule = async (modId) => {
  const response = await axios.get(`${reviewBaseUrl}/mod/${modId}`);
  return response.data;
};

const getReviewsOfUser = async (userId) => {
  const response = await axios.get(`${reviewBaseUrl}/user/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};

const addReviewOfModule = async (
  review: ReviewToSubmit,
  modId: string,
  userId: string
) => {
  const { text, semesterTaken, acadYearTaken } = review;
  const response = await axios.post(
    reviewBaseUrl,
    {
      text,
      modId,
      userId,
      semesterTaken,
      acadYearTaken,
      // workload,
    },
    {
      withCredentials: true,
    }
  );

  return response.status;
};

const updateReviewOfModule = async (
  review: ReviewToSubmit,
  modId: string,
  userId: string,
  reviewId: string
) => {
  const { text, semesterTaken, acadYearTaken } = review;
  const response = await axios.put(
    `${reviewBaseUrl}/${reviewId}`,
    {
      text,
      modId,
      userId,
      semesterTaken,
      acadYearTaken,
      // workload,
    },
    {
      withCredentials: true,
    }
  );

  return response.status;
};

const addRating = async (
  value: number,
  type: "difficulty" | "star",
  userId: string,
  subId: string,
  sub: "mod" | "school" | "course"
) => {
  const response = await axios.post(
    ratingBaseUrl,
    {
      type,
      userId,
      subId,
      value,
      sub,
    },
    {
      withCredentials: true,
    }
  );

  return response.status;
};

const getRating = async (subscriberType, userId, ratingType) => {
  const query = queryString.stringify({
    sub: subscriberType,
    userId,
    type: ratingType,
  });
  const response = await axios.get(`${ratingBaseUrl}/?${query}`);
  return response.data;
};

const updateRating = async (
  value: number,
  type: "difficulty" | "star",
  userId: string,
  subId: string,
  sub: "mod" | "school" | "course",
  ratingId: string
) => {
  const response = await axios.put(
    `${ratingBaseUrl}/${ratingId}`,
    {
      sub,
      subId,
      userId,
      type,
      value,
    },
    { withCredentials: true }
  );
  return response.data;
};

export default {
  getReviewsOfModule,
  getReviewsOfUser,
  addReviewOfModule,
  addRating,
  getRating,
  updateRating,
  updateReviewOfModule,
};
