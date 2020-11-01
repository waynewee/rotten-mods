import axios from "axios";
import queryString from "query-string";
const baseUrl = "http://localhost:8080/api/reaction";

const addReaction = async (sub, subId, userId, type) => {
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

export default {
  addReaction,
};
