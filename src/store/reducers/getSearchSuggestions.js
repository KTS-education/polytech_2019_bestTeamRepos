const initialState = {
  searchSuggestions: [],
  error: ""
};

export const getSearchSuggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUGGESTIONS_BEGIN":
      return {
        ...state
      };
    case "FETCH_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        searchSuggestions: action.payload
      };
    case "FETCH_SUGGSETIONS_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    case "DELETE_SUGGESTIONS":
      return {
        ...state,
        searchSuggestions: []
      };
    case "FETCH_SUGGESTIONS_CANCEL":
      return {
        ...state,
        searchSuggestions: []
      };
    default:
      return {
        ...state
      };
  }
};
