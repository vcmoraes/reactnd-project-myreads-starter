import { SEARCH_BOOKS } from "../../actions/SearchActions/constants";

const initialState = {
  booksSearch: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        booksSearch: sortBooks(action.booksSearch)
      };
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
