import bookmarkApi from "../api/bookmark";
import plannedModApi from "../api/planned-mod";
import reviewApi from "../api/review";
import {
  FETCH_BOOKMARKS,
  FETCH_PLANNED_MODS,
  FETCH_PERSONAL_REVIEWS,
} from "../redux/constants";
import { store } from "../redux/store";

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
