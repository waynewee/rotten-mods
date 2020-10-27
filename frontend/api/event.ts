import axios from "axios";
const baseUrl = "http://localhost:8080/api/event";

const addEvent = async (
  userId: string,
  sub: "course" | "mod" | "review" | "school",
  subId: string,
  type: "view" | "like"
) => {
  const response = await axios.post(baseUrl, {
    userId,
    sub,
    subId,
    type,
  });

  return response.data;
};

export default {
  addEvent,
};
