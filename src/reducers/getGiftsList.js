const initialState = {
  giftsList: [],
  isLoading: false,
  error: null
};

export const giftsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GIFTS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_GIFTS_SUCCESS":
      return {
        ...state,
        giftsList: action.payload,
        isLoading: false
      };
    case "FETCH_GIFTS_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
