const FETCH_RESULTS_BEGIN = "FETCH_RESULTS_BEGIN";
const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";
const FETCH_RESULTS_FAILURE = "FETCH_RESULTS_FAILURE";

export const fetchResultsBegin = () => ({
  type: FETCH_RESULTS_BEGIN
});

export const fetchResultsSuccess = payload => ({
  type: FETCH_RESULTS_SUCCESS,
  payload
});

export const fetchResultsFailure = payload => ({
  type: FETCH_RESULTS_FAILURE,
  payload
});
