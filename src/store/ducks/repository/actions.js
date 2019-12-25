import types from "./types";

export const repositoryRequest = value => ({
  type: types.REPOSITORY_REQUEST
});
export const repositorySuccess = () => ({
  type: types.REPOSITORY_SUCCESS
});
export const repositoryFailure = () => ({
  type: types.REPOSITORY_FAILURE
});

export default {
  repositoryRequest,
  repositorySuccess,
  repositoryFailure
};
