import { AnyAction } from "redux";
import {
  FETCH_BOOKMARKS,
  FETCH_PLANNED_MODS,
  FETCH_PERSONAL_REVIEWS,
} from "../constants";
import { PersonalModulesState } from "../types";


export const fetchBookmarksAction = (data) => {
    return {
        type: FETCH_BOOKMARKS,
        payload: data,
    };
}

export const fetchPlannedModsAction = (data) => {
    return {
        type: FETCH_PLANNED_MODS,
        payload: data,
    };
}


export const fetchPersonalReviewsAction = (data) => {
    return {
        type: FETCH_PERSONAL_REVIEWS,
        payload: data,
    };
}


