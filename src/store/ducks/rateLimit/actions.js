import types from "./types";

export const apiRateLimitFailure = () => ({
  type: types.API_RATE_LIMIT_FAILURE
});

export const apiRateLimitSuccess = () => ({
  type: types.API_RATE_LIMIT_SUCCESS
});

export default {
  apiRateLimitSuccess,
  apiRateLimitFailure
};
