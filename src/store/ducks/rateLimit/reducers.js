import { combineReducers } from "redux";

import { API_RATE_LIMIT_SUCCESS, API_RATE_LIMIT_FAILURE } from "./types";

const initialState = {
  profile: {},
  search: {},
};

const rateLimit = (state = initialState, action) => {
  case 'API_RATE_LIMIT_SUCCESS':
  break;
  case 'API_RATE_LIMIT_FAILURE':
  break;
  default:
    return state;
};

export default rateLimit;
