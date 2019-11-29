const initialState = {
  accountInfo: { id: null, name: null, surname: null, photo: null }
};

export const accountInfoHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACCOUNT_INFO_LOADED":
      return {
        ...state,
        accountInfo: {
          id: action.payload.id,
          name: action.payload.first_name,
          surname: action.payload.last_name,
          photo: action.payload.photo_100
        }
      };
    default:
      return state;
  }
};
