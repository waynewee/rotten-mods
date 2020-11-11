import bookmarkApi from "../api/bookmark";
import plannedModApi from "../api/planned-mod";
import reviewApi from "../api/review";
import { store } from "../redux/store";
import { message } from "antd";
import { 
  fetchBookmarksAction,
  fetchPlannedModsAction, 
  fetchPersonalReviewsAction 
} from  "../redux/actions/personal-modules"

export const updatePersonalBookmarks = async (userId) => {
  if (!userId) return;

  const data = await bookmarkApi.getBookmarks(userId);
  store.dispatch(fetchBookmarksAction(data));
};

export const updatedPersonalPlannedModules = async (userId) => {
  if (!userId) return;

  const data = await plannedModApi.fetchPlannedMods(userId);
  store.dispatch(fetchPlannedModsAction(data));
};

export const updatePersonalReviews = async (userId) => {
  if (!userId) return;

  const data = await reviewApi.getReviewsOfUser(userId);
  store.dispatch(fetchPersonalReviewsAction(data));
};

export const triggerRequireLoginMessage = () => {
  message.warning("You need to login first!");
};
