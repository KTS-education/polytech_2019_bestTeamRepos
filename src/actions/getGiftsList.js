const FETCH_GIFTS_BEGIN = "FETCH_GIFTS_BEGIN";
const FETCH_GIFTS_SUCCESS = "FETCH_GIFTS_SUCCESS";
const FETCH_GIFTS_FAILURE = "FETCH_GIFTS_FAILURE";

export const fetchGiftsBegin = () => ({
  type: FETCH_GIFTS_BEGIN
});

export const fetchGiftsSuccess = payload => ({
  type: FETCH_GIFTS_SUCCESS,
  payload
});

export const fetchGiftsFailure = payload => ({
  type: FETCH_GIFTS_FAILURE,
  payload
});
