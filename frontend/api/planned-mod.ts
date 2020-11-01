import axios from "axios";
import queryString from "query-string";
const baseUrl = "http://localhost:8080/api/planned-mod";

const addPlannedMod = async (userId, modId, semester) => {
  await axios.post(
    baseUrl,
    {
      userId,
      modId,
      semester,
    },
    {
      withCredentials: true,
    }
  );
};

const updatePlannedMod = async (plannedModId, userId, modId, semester) => {
  await axios.put(
    `${baseUrl}/${plannedModId}`,
    {
      userId,
      modId,
      semester,
    },
    {
      withCredentials: true,
    }
  );
};

const removePlannedMod = async (plannedModId) => {
  await axios.delete(`${baseUrl}/${plannedModId}`, {
    withCredentials: true,
  });
};

const fetchPlannedMods = async (userId) => {
  const query = queryString.stringify({ id: userId })
  const response = await axios.get(`${baseUrl}/user/?${query}`, {
    withCredentials: true,
  });

  return response.data;
};

export default {
  addPlannedMod,
  removePlannedMod,
  fetchPlannedMods,
  updatePlannedMod,
};
