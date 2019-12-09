const initialState = {
  profile: { id: null, name: null, surname: null, photo: null },
  isLoading: false,
  error: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_PROFILE_SUCCESS":
      return {
        ...state,
        profile: {
          id: action.payload.id,
          name: action.payload.first_name,
          surname: action.payload.last_name,
          photo: action.payload.photo_200
        },
        isLoading: false
      };
    case "FETCH_PROFILE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
