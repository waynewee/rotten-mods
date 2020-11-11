
import {
  ADD_MODULE_FOR_COMPARISON,
  DELETE_MODULE_FOR_COMPARISON,
} from "../constants";


export const addModuleAction = (_id, code) => {
    return {
        type: ADD_MODULE_FOR_COMPARISON,
        payload: {
          id: _id,
          code
        }
    }
}

export const deleteModuleAction = (order) => {
    return {
        type: DELETE_MODULE_FOR_COMPARISON,
        payload: order
    };
}

