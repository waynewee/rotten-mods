import axios from "axios";
import { Review } from "../types";

const reviewBaseUrl = "http://localhost:8080/api/review";
const ratingBaseUrl = "http://localhost:8080/api/rating";

interface ReviewToSubmit {
  text: string;
  semesterTaken: number;
  yearTaken: number;
  workload: number;
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
  const { text, semesterTaken, yearTaken, workload } = review;
  const response = await axios.post(reviewBaseUrl, {
    text,
    modId,
    userId,
    semesterTaken,
    yearTaken,
    workload,
  });

  console.log(`Post Review:`, response.status);
  return response.status;
};

const addRatingOfModule = async (
  value: number,
  type: "difficulty" | "star",
  userId: string,
  modId: string
) => {
  const response = await axios.post(ratingBaseUrl, {
    type,
    userId,
    modId,
    value,
  });

  console.log(`${type}:`, response.status);
  return response.status;
};

export default {
  getReviewsOfModule,
  addReviewOfModule,
  addRatingOfModule,
};
