const initialState = {
  headerFriendsList: [],
  error: null,
  isLoading: false
};

export const friendsHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEADER_FRIENDS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "HEADER_FRIENDS_SUCCESS":
      return {
        ...state,
        headerFriendsList: action.payload,
        isLoading: false
      };
    case "HEADER_FRIENDS_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
