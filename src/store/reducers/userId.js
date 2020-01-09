const initialState = {
  userId: {
    api_id: null,
    vk_id: null,
    api_token: null
  },
  error: null,
  isLoading: true
};

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ID_BEGIN":
      return {
        ...state
      };
    case "USER_ID_SUCCESS":
      return {
        ...state,
        userId: action.payload,
        isLoading: false
      };
    case "USER_ID_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
