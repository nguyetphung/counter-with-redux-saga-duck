import types from "./types";

export const searchRequest = keyword => ({
  type: types.SEARCH_REQUEST,
  keyword
});

export const searchSuccess = () => ({
  type: types.SEARCH_SUCCESS
});
export const searchFailure = () => ({
  type: types.SEARCH_FAILURE
});

export default {
  searchRequest,
  searchSuccess,
  searchFailure
};
