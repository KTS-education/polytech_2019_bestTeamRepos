import { api } from "@src/api.js";

export const FETCH_GIFTS_BEGIN = "FETCH_GIFTS_BEGIN";
export const FETCH_GIFTS_SUCCESS = "FETCH_GIFTS_SUCCESS";
export const FETCH_GIFTS_FAILURE = "FETCH_GIFTS_FAILURE";

export function getWishlist(user_id) {
  return async dispatch => {
    dispatch({
      type: FETCH_GIFTS_BEGIN,
      payload: user_id
    });
    try {
      let result = await api(`/api/wishlist/get`, "GET", {
        id: user_id
      });

      dispatch({
        type: FETCH_GIFTS_SUCCESS,
        payload: result.response.wishlist
      });
    } catch (error) {
      dispatch({
        type: FETCH_GIFTS_FAILURE,
        error: new Error(error)
      });
    }
  };
}

export function getFriendWishlist(user_id) {
  return async dispatch => {
    dispatch({
      type: FETCH_GIFTS_BEGIN,
      payload: user_id
    });
    try {
      let result = await api(`/api/user/friends`, "POST", {
        ids: user_id
      });

      dispatch({
        type: FETCH_GIFTS_SUCCESS,
        payload: result.response.wishlist
      });
    } catch (error) {
      dispatch({
        type: FETCH_GIFTS_FAILURE,
        error: new Error(error)
      });
    }
  };
}
