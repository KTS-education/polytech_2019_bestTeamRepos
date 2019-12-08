import { api } from "@src/api.js";

const FETCH_RESULTS_BEGIN = "FETCH_RESULTS_BEGIN";
const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";
const FETCH_RESULTS_FAILURE = "FETCH_RESULTS_FAILURE";

export function apiGetItems(query, giftsList) {
  return async dispatch => {
    if (!query) {
      dispatch({
        type: FETCH_RESULTS_SUCCESS,
        payload: null
      });
    } else {
      dispatch({
        type: FETCH_RESULTS_BEGIN,
        payload: query
      });
      try {
        let result = await api("/api/products/search", "GET", {
          query: query,
          lat: 55.764491899999996,
          lon: 37.6710281
        });
        const items = result.response.response.items;

        items.forEach(item => {
          item.isWanted = false;
          giftsList.forEach(gift => {
            if (item.id === gift.id) item.isWanted = true;
          });
        });

        dispatch({
          type: FETCH_RESULTS_SUCCESS,
          payload: result.response.response.items
        });
      } catch (error) {
        dispatch({
          type: FETCH_RESULTS_FAILURE,
          error: new Error(error)
        });
      }
    }
  };
}
