import { api } from "@src/api.js";

export const FETCH_GIFTS_BEGIN = "FETCH_GIFTS_BEGIN";
export const FETCH_GIFTS_SUCCESS = "FETCH_GIFTS_SUCCESS";
export const FETCH_GIFTS_FAILURE = "FETCH_GIFTS_FAILURE";

const DELETE_ITEM = "DELETE_ITEM";
const ADD_GIFT_FROM_ME = "ADD_GIFT_FROM_ME";
const REMOVE_GIFT_FROM_ME = "REMOVE_GIFT_FROM_ME";
const SAVE_LOCALSTORAGE = "SAVE_LOCALSTORAGE";

export function updateWishlist(user_id, isFriend = false, my_id) {
  return async dispatch => {
    dispatch({
      type: FETCH_GIFTS_BEGIN
    });
    try {
      let result,
        result2 = null;
      if (isFriend) {
        let { response } = await api(`/api/user/friends`, "POST", {
          ids: [user_id]
        });

        if (!response.friends.length) {
          dispatch({
            type: FETCH_GIFTS_SUCCESS,
            payload: [[], []]
          });
        } else {
          result = await api(`/api/wishlist/get`, "GET", {
            id: response.friends[0]._id
          });
          result2 = await api(`/api/wishlist/get`, "GET", {
            id: my_id
          });
          result.response.wishlist.forEach(product => {
            result2.response.wishlist.forEach(myProduct => {
              if (product.id === myProduct.id) product.myFavourite = true;
            });
          });
        }
      } else {
        result = await api(`/api/wishlist/get`, "GET", {
          id: user_id
        });
      }

      dispatch({
        type: FETCH_GIFTS_SUCCESS,
        payload: isFriend
          ? [result.response.wishlist, result2.response.wishlist]
          : [result.response.wishlist, []]
      });
    } catch (error) {
      dispatch({
        type: FETCH_GIFTS_FAILURE,
        error: new Error(error)
      });
    }
  };
}

export function addToMyList(product) {
  return async () => {
    const result = await api(`/api/wishlist/add`, "POST", {
      id: product.id,
      name: product.name,
      photo: typeof product.photo === "object" ? product.photo.url : "",
      price: product.price.avg
    });
    result.response
      ? console.log(result.response)
      : console.error(result.errorData);
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
