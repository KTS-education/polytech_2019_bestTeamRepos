const initialState = {
  isMyFavourite: false,
  error: null
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_MY_FAVOURITE_START":
      return {
        ...state,
        isMyFavourite: false
      };
    case "IS_MY_FAVOURITE_SUCCESS":
      return {
        ...state,
        isMyFavourite: true
      };
    case "IS_MY_FAVOURITE_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
