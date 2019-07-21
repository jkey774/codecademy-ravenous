const AppActionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SEARCH_LOCATION: "SET_SEARCH_LOCATION",
  SET_SEARCH_SORT_BY: "SET_SEARCH_SORT_BY",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS"
};

const defaultState = {
  term: "",
  location: "",
  sortBy: "best_match",
  businesses: []
};

const rootReducer = (state, action) => {
  state = state || defaultState;

  switch (action.type) {
    case AppActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload.term
      };

    case AppActionTypes.SET_SEARCH_LOCATION:
      return {
        ...state,
        location: action.payload.location
      };

    case AppActionTypes.SET_SEARCH_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.sortBy
      };

    case AppActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        total: action.payload.total,
        businesses: action.payload.businesses,
        offset: action.payload.offset,
        searchSuccess: action.searchSuccess
      };

    default:
      return state;
  }
};

export default rootReducer;
