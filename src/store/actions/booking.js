import { api } from "@src/api.js";

const ADD_GIFT_FROM_ME = "ADD_GIFT_FROM_ME";
const REMOVE_GIFT_FROM_ME = "REMOVE_GIFT_FROM_ME";
const SAVE_LOCALSTORAGE = "SAVE_LOCALSTORAGE";
const GET_GIFTS_FROM_ME = "GET_GIFTS_FROM_ME";

export function bookProduct(productId, userId) {
  return async () => {
    try {
      const { response } = await api(`/api/user/friends`, "POST", {
        ids: [userId]
      });
      console.log(response, userId);
      const result = await api("/api/wishlist/book", "POST", {
        id: productId,
        user_id: response.friends[0]._id
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export function unbookProduct(productId, userId) {
  return async () => {
    try {
      const { response } = await api(`/api/user/friends`, "POST", {
        ids: [userId]
      });
      const result = await api("/api/wishlist/unbook", "POST", {
        id: productId,
        user_id: response.friends[0]._id
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToListFromMe(data) {
  return dispatch => {
    dispatch({ type: ADD_GIFT_FROM_ME, payload: data });
    dispatch({ type: SAVE_LOCALSTORAGE });
  };
}

export function removeFromListFromMe(data) {
  return dispatch => {
    dispatch({ type: REMOVE_GIFT_FROM_ME, payload: data });
    dispatch({ type: SAVE_LOCALSTORAGE });
  };
}

export function getListFromMe(data) {
  return dispatch => {
    console.log(data);
    dispatch({
      type: GET_GIFTS_FROM_ME,
      payload: data
    });
  };
}
