const initialState = {
  friendsList: [],
  isLoading: false
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
