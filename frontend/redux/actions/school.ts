import { FETCH_SCHOOLS } from "../constants";

export const fetchSchoolAction = (schools) => {
    return {
        type: FETCH_SCHOOLS,
        payload: schools,
      };
}

