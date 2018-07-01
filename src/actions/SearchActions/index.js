import { SEARCH_BOOKS, UPDATE_BOOKS } from "./constants";

import * as BooksAPI from "../../BooksAPI";

function searchBooks(booksSearch) {
  return {
    type: SEARCH_BOOKS,
    booksSearch: booksSearch
  };
}

function updateBook(book) {
  return {
    type: UPDATE_BOOKS,
    bookUpdate: book
  };
}

export function searchBooksDispatch(query) {
  return async dispatch => {
    if (query.trim()) {
      return BooksAPI.search(query).then(books => {
        Promise.all(books.map(book => BooksAPI.get(book.id))).then(function(
          booksSearch
        ) {
          dispatch(searchBooks(booksSearch));
        });
      });
    } else {
      return dispatch(searchBooks([]));
    }
  };
}

export function updateBookDispatch(book) {
  return async dispatch => {
    return BooksAPI.update(book, book.shelf).then(() => {
      dispatch(updateBook(book));
    });
  };
}
