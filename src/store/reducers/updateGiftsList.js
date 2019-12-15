const initialState = {
  giftsList: [],
  myGiftsList: [],
  isLoading: false,
  error: null,
  id: null
};

export const giftsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GIFTS_BEGIN":
      return {
        ...state,
        isLoading: true,
        giftsList: [],
        myGiftsList: []
      };
    case "FETCH_GIFTS_SUCCESS":
      return {
        ...state,
        giftsList: action.payload[0],
        myGiftsList: action.payload[1],
        isLoading: false
      };

    case "FETCH_GIFTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case "DELETE_ITEM":
      const itemIndex = state.giftsList.findIndex(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        giftsList: [
          ...state.giftsList.slice(0, itemIndex),
          ...state.giftsList.slice(itemIndex + 1)
        ]
      };
    default:
      return state;
  }
};
