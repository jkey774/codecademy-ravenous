const AppActionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SEARCH_LOCATION: "SET_SEARCH_LOCATION",
  SET_SEARCH_SORT_BY: "SET_SEARCH_SORT_BY",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS"
};

export const setSearchTerm = term => ({
  type: AppActionTypes.SET_SEARCH_TERM,
  payload: { term }
});

export const setSearchLocation = location => ({
  type: AppActionTypes.SET_SEARCH_LOCATION,
  payload: { location }
});

export const setSearchSortBy = sortBy => ({
  type: AppActionTypes.SET_SEARCH_SORT_BY,
  payload: { sortBy }
});

export const setSearchResults = (total, businesses, offset, searchSuccess) => ({
  type: AppActionTypes.SET_SEARCH_RESULTS,
  payload: { total, businesses, offset },
  searchSuccess: searchSuccess
});
