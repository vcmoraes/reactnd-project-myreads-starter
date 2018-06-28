import { SEARCH_BOOKS } from "./constants";

import * as BooksAPI from "../../BooksAPI";

function searchBooks(booksSearch) {
  return {
    type: SEARCH_BOOKS,
    booksSearch: booksSearch
  };
}

export function searchBooksDispatch(query) {
  return async dispatch => {
    if (query.trim()) {
      return BooksAPI.search(query).then(books => {
        dispatch(searchBooks(Array.isArray(books) ? books : []));
      });
    } else {
      return dispatch(searchBooks([]));
    }
  };
}
