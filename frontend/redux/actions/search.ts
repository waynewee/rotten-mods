import { SEARCH_TERM } from "../constants";


export const fetchSchoolAction = (searchTerm) => {
    return { type: SEARCH_TERM, payload: searchTerm };
}

