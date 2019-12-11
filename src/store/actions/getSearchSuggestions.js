import { api } from "@src/api.js";

const FETCH_SUGGESTIONS_BEGIN = "FETCH_SUGGESTIONS_BEGIN";
const FETCH_SUGGESTIONS_SUCCESS = "FETCH_SUGGESTIONS_SUCCESS";
const FETCH_SUGGESTIONS_FAILURE = "FETCH_SUGGESTIONS_FAILURE";

export function getSearchSuggestions(input) {
  return async dispatch => {
    dispatch({ type: FETCH_SUGGESTIONS_BEGIN });
    try {
      const response = await api("/api/products/suggest", "GET", {
        query: input
      });
      dispatch({
        type: FETCH_SUGGESTIONS_SUCCESS,
        payload: response.response.suggestions
      });
    } catch (error) {
      dispatch({
        type: FETCH_SUGGESTIONS_FAILURE,
        payload: error
      });
    }
  };
}
