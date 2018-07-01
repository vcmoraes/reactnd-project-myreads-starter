import {
  SEARCH_BOOKS,
  UPDATE_LAST_QUERY,
  UPDATE_BOOKS
} from "../../actions/SearchActions/constants";

const initialState = {
  lastQuery: "",
  booksSearch: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        booksSearch: sortBooks(action.booksSearch)
      };
    case UPDATE_LAST_QUERY:
      return {
        ...state,
        lastQuery: action.query
      };
    case UPDATE_BOOKS:
    default:
      return {
        ...state
      };
  }
};

function sortBooks(books) {
  return books
    ? books.sort(function(a, b) {
        return a.title - b.title;
      })
    : books;
}

export default searchReducer;
