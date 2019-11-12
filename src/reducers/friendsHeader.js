const initialState = {
  headerFriendsList: [],
  error: null
};

export const friendsHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEADER_FRIENDS_LOADED":
      return {
        ...state,
        headerFriendsList: action.payload
      };
    default:
      return state;
  }
};
