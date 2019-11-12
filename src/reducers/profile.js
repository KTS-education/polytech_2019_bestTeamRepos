const initialState = {
  id: null,
  name: null,
  surname: null,
  photo: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_LOADED":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.first_name,
        surname: action.payload.last_name,
        photo: action.payload.photo_200
      };
    default:
      return state;
  }
};
