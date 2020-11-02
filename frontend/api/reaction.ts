import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";
import { Reaction } from "../types";

const baseUrl = `${serverDomain}/api/reaction`;

const addReaction = async (
  sub: string,
  subId: string,
  userId: string,
  type: string
): Promise<void> => {
  await axios.post(
    baseUrl,
    {
      sub,
      subId,
      userId,
      type,
    },
    {
      withCredentials: true,
    }
  );
};

const getReaction = async (
  sub: string,
  subId: string,
  userId: string,
  type: string
): Promise<Reaction> => {
  const query = queryString.stringify({
    sub,
    subId,
    userId,
    type,
  });
  const response = await axios.get<Reaction>(`${baseUrl}/?${query}`);
  return response.data;
};

const deleteReaction = async (reactionId: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${reactionId}`);
};

export default {
  addReaction,
  getReaction,
  deleteReaction,
};
