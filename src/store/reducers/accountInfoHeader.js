const initialState = {
  accountInfoHeader: { id: null, name: null, surname: null, photo: null },
  isLoading: false,
  error: null
};

export const accountInfoHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACCOUNT_INFO_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "ACCOUNT_INFO_SUCCESS":
      return {
        ...state,
        accountInfoHeader: {
          id: action.payload.id,
          name: action.payload.first_name,
          surname: action.payload.last_name,
          photo: action.payload.photo_100
        },
        isLoading: false
      };
    case "ACCOUNT_INFO_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
