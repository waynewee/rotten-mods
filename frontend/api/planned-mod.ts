import axios from "axios";
import queryString from "query-string";
import { serverDomain } from "../config";

const baseUrl = `${serverDomain}/api/planned-mod`;

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
  const query = queryString.stringify({ userId });
  const response = await axios.get(`${baseUrl}/?${query}`, {
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
