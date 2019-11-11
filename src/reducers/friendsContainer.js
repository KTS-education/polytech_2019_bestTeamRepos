const initialState = {
  friendsList: []
};

export const friendsContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRIENDS_LOADED":
      return {
        ...state,
        friendsList: action.payload
      };
    default:
      return state;
  }
};
