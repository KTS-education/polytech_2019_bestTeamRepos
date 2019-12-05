const initialState = {
  id: null,
  error: null
};

export const deleteItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
