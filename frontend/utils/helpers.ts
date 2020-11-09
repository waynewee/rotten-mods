import { Dispatch, SetStateAction } from "react";
import bookmarkApi from "../api/bookmark";
import plannedModApi from "../api/planned-mod";
import reviewApi from "../api/review";
import {
  FETCH_BOOKMARKS,
  FETCH_PLANNED_MODS,
  FETCH_PERSONAL_REVIEWS,
} from "../redux/constants";
import { store } from "../redux/store";
import { message } from "antd";

export const updatePersonalBookmarks = async (userId) => {
  if (!userId) return;

  const data = await bookmarkApi.getBookmarks(userId);
  store.dispatch({
    type: FETCH_BOOKMARKS,
    payload: data,
  });
};

export const updatedPersonalPlannedModules = async (userId) => {
  if (!userId) return;

  const data = await plannedModApi.fetchPlannedMods(userId);
  store.dispatch({
    type: FETCH_PLANNED_MODS,
    payload: data,
  });
};

export const updatePersonalReviews = async (userId) => {
  if (!userId) return;

  const data = await reviewApi.getReviewsOfUser(userId);
  store.dispatch({
    type: FETCH_PERSONAL_REVIEWS,
    payload: data,
  });
};

export const triggerRequireLoginMessage = () => {
  message.warning("You need to login first!");
};

export const fetchRatings = (
  ratingIds: string[],
  setStar: Dispatch<SetStateAction<number>>,
  setDifficulty: Dispatch<SetStateAction<number>>
): void => {
  ratingIds.forEach(async (id) => {
    const rating = await reviewApi.getRatingById(id);
    if (rating.type == "star") {
      setStar(rating.value);
    } else if (rating.type == "difficulty") {
      setDifficulty(rating.value);
    }
  });
};
