const initialState = {
  userId: {
    api_id: null,
    vk_id: null,
    api_token: null
  },
  error: null
};

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ID":
      return {
        ...state,
        userId: action.payload
      };
    default:
      return state;
  }
};
