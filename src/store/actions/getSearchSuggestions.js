import { api } from "@src/api.js";

const FETCH_SUGGESTIONS_BEGIN = "FETCH_SUGGESTIONS_BEGIN";
const FETCH_SUGGESTIONS_SUCCESS = "FETCH_SUGGESTIONS_SUCCESS";
const FETCH_SUGGESTIONS_FAILURE = "FETCH_SUGGESTIONS_FAILURE";
const FETCH_SUGGESTIONS_CANCEL = "FETCH_SUGGESTIONS_CANCEL";
const DELETE_SUGGESTIONS = "DELETE_SUGGESTIONS";

export function getSearchSuggestions(input) {
  return async dispatch => {
    dispatch({ type: FETCH_SUGGESTIONS_BEGIN });
    const response = await api("/api/products/suggest", "GET", {
      query: input
    });
    if (response.response) {
      if (input) {
        dispatch({
          type: FETCH_SUGGESTIONS_SUCCESS,
          payload: response.response.suggestions
        });
      } else if (!input) {
        dispatch({ type: FETCH_SUGGESTIONS_CANCEL });
      }
    } else {
      dispatch({
        type: FETCH_SUGGESTIONS_FAILURE,
        payload: response.response
      });
      return;
    }
  };
}

export function deleteSearchSuggestions() {
  return dispatch => dispatch({ type: DELETE_SUGGESTIONS });
}
