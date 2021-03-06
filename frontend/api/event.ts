import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/event`;

const addEvent = async (
  userId: string,
  sub: "course" | "mod" | "review" | "school",
  subId: string,
  type: "view"
) => {
  const response = await axios.post(baseUrl, {
    userId,
    sub,
    subId,
    type,
  });

  return response.data;
};

const getEvent = async (subscriberType, subscriberId, userId, eventType) => {
  const query = queryString.stringify({
    sub: subscriberType,
    subId: subscriberId,
    userId,
    type: eventType,
  });
  const response = await axios.get(`${baseUrl}/?${query}`);

  return response.data;
};

const deleteEvent = async (subscriberType, subscriberId, userId, eventType) => {
  await axios.delete(baseUrl, {
    params: {
      sub: subscriberType,
      subId: subscriberId,
      userId,
      type: eventType,
    },
  });
};

export default {
  addEvent,
  getEvent,
  deleteEvent,
};
