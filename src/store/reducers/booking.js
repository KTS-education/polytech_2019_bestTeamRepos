const initialState = {
  isMyFavourite: false,
  giftsListFromMe: [],
  error: null
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_MY_FAVOURITE_START":
      return {
        ...state,
        isMyFavourite: false
      };
    case "IS_MY_FAVOURITE_SUCCESS":
      return {
        ...state,
        isMyFavourite: true
      };
    case "IS_MY_FAVOURITE_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    case "ADD_GIFT_FROM_ME":
      return {
        ...state,
        giftsListFromMe: [...state.giftsListFromMe, action.payload]
      };
    case "REMOVE_GIFT_FROM_ME":
      const itemIndex = state.giftsListFromMe.findIndex(
        ({ productId, userId }) =>
          productId === action.payload.productId &&
          userId === action.payload.userId
      );
      return {
        ...state,
        giftsListFromMe: [
          ...state.giftsListFromMe.slice(0, itemIndex),
          ...state.giftsListFromMe.slice(itemIndex + 1)
        ]
      };
    case "GET_GIFTS_FROM_ME":
      if (action.payload) {
        return {
          ...state,
          giftsListFromMe: action.payload
        };
      } else
        return {
          ...state
        };
    default:
      return state;
  }
};
