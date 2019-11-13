const FETCH_FRIENDS_BEGIN = "FETCH_FRIENDS_BEGIN";
const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const fetchFriendsBegin = () => ({
  type: FETCH_FRIENDS_BEGIN
});

export const fetchFriendsSuccess = payload => ({
  type: FETCH_FRIENDS_SUCCESS,
  payload
});

export const fetchFriendsFailure = payload => ({
  type: FETCH_FRIENDS_FAILURE,
  payload
});
