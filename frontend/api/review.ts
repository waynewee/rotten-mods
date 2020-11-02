import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";
import { Rating } from "../types";

const reviewBaseUrl = `${serverDomain}/api/review`;
const ratingBaseUrl = `${serverDomain}/api/rating`;

interface ReviewToSubmit {
  text: string;
  semesterTaken: number;
  acadYearTaken: string;
  modId: string;
  userId: string;
  rating: {
    difficulty: Rating;
    star: Rating;
  };
}

const getReviewsOfModule = async (
  modId: string,
  limit: number = 10,
  page: number = 1
) => {
  const query = queryString.stringify({ modId });
  const response = await axios.get(`${reviewBaseUrl}/?${query}`);
  return response.data;
};

const getReviewsOfUser = async (userId: string) => {
  const query = queryString.stringify({ userId });
  const response = await axios.get(`${reviewBaseUrl}/?${query}`, {
    withCredentials: true,
  });
  return response.data;
};

const addReviewOfModule = async (body: ReviewToSubmit) => {
  const response = await axios.post(reviewBaseUrl, body, {
    withCredentials: true,
  });

  return response.status;
};

const updateReviewOfModule = async (body: ReviewToSubmit, reviewId: string) => {
  const response = await axios.put(`${reviewBaseUrl}/${reviewId}`, body, {
    withCredentials: true,
  });

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

const getRating = async (subscriberType, subscriberId, userId, ratingType) => {
  const query = queryString.stringify({
    sub: subscriberType,
    subId: subscriberId,
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
