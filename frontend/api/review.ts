import axios from "axios";
import { Review } from "../types";

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

const addRatingOfModule = async (
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

const fetchPersonalReviews = async (userId) => {
  const response = await axios.get(`${reviewBaseUrl}/user/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};

export default {
  getReviewsOfModule,
  addReviewOfModule,
  addRatingOfModule,
  fetchPersonalReviews,
};
