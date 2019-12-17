const initialState = {
  giftsList: [],
  myGiftsList: [],
  giftsListFromMe: [],
  isLoading: false,
  error: null,
  id: null
};

let itemIndex;

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
      itemIndex = state.giftsList.findIndex(({ id }) => id === action.payload);
      return {
        ...state,
        giftsList: [
          ...state.giftsList.slice(0, itemIndex),
          ...state.giftsList.slice(itemIndex + 1)
        ]
      };
    case "ADD_GIFT_FROM_ME":
      return {
        ...state,
        giftsListFromMe: state.giftsListFromMe.concat(action.payload)
      };
    case "SAVE_LOCALSTORAGE":
      localStorage.setItem("state", JSON.stringify(state.giftsListFromMe));
      return state;
    case "REMOVE_GIFT_FROM_ME":
      console.log(action.payload, state.giftsListFromMe);
      itemIndex = state.giftsListFromMe.findIndex(
        ({ productId, userId }) =>
          productId === action.payload.productId &&
          userId === action.payload.userId
      );
      if (state.giftsListFromMe.length) {
        return {
          ...state,
          giftsListFromMe: [
            ...state.giftsListFromMe.slice(0, itemIndex),
            ...state.giftsListFromMe.slice(itemIndex + 1)
          ]
        };
      } else if (itemIndex) {
        return {
          ...state,
          giftsListFromMe: []
        };
      }
    // eslint-disable-next-line no-fallthrough
    case "GET_GIFTS_FROM_ME":
      if (action.payload) {
        state.myGiftsList.forEach(myGift => {
          action.payload.forEach(giftFromMe => {
            if (myGift.id === giftFromMe.productId)
              giftFromMe.myFavourite = true;
          });
        });
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
