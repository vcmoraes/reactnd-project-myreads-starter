import { ALL_BOOKS, UPDATE_BOOKS } from "./constants";
import * as BooksAPI from "../../BooksAPI";

function allBooks(booksAll) {
  return {
    type: ALL_BOOKS,
    booksAll: booksAll
  };
}

function updateBook(book) {
  return {
    type: UPDATE_BOOKS,
    bookUpdate: book
  };
}

export function allBooksDispatch() {
  return async dispatch => {
    return BooksAPI.getAll().then(booksAll => {
      dispatch(allBooks(booksAll));
    });
  };
}

export function updateBookDispatch(book) {
  return async dispatch => {
    return BooksAPI.update(book, book.shelf).then(() => {
      dispatch(updateBook(book));
    });
  };
}
