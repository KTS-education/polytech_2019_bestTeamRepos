import { api } from "@src/api.js";

export const FETCH_GIFTS_BEGIN = "FETCH_GIFTS_BEGIN";
export const FETCH_GIFTS_SUCCESS = "FETCH_GIFTS_SUCCESS";
export const FETCH_GIFTS_FAILURE = "FETCH_GIFTS_FAILURE";

const DELETE_ITEM = "DELETE_ITEM";

export function updateWishlist(user_id) {
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
      let result = await api(`/api/user/friends`, "GET", {
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

export function deleteFromMyList(user_id) {
  return async dispatch => {
    dispatch({
      type: DELETE_ITEM,
      payload: user_id
    });
    const result = await api(`/api/wishlist/delete`, "POST", {
      id: user_id
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
  };
}
