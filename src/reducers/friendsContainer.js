const initialState = {
  friendsList: [],
  isLoading: true,
  error: null
};

export const friendsContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRIENDS_LOADED":
      return {
        ...state,
        friendsList: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
