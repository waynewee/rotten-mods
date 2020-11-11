import { LOG_USER_IN, LOG_USER_OUT } from "../constants";

import { User } from "../../types";

export const logInAction = (user: User) => {
    return {
        type: LOG_USER_IN,
        payload: user
    };
}

export const logOutAction = () => {
    return {
        type: LOG_USER_OUT
    };
}

