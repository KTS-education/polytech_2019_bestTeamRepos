const initialState = {
  friendsList: [],
  isLoading: false,
  error: null
};

export const friendsContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FRIENDS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_FRIENDS_SUCCESS":
      return {
        ...state,
        friendsList: action.payload,
        isLoading: false
      };
    case "FETCH_FRIENDS_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
