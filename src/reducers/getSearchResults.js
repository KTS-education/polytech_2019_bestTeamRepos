const initialState = {
  searchList: null,
  isLoading: false,
  error: null
};

export const searchContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESULTS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_RESULTS_SUCCESS":
      return {
        ...state,
        searchList: action.payload,
        isLoading: false
      };
    case "FETCH_RESULTS_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
