import { ALL_BOOKS, UPDATE_BOOKS } from "../../actions/HomeActions/constants";

const initialState = {
  sections: [],
  booksAll: []
};

const homerReducer = (state = initialState, action) => {
  var booksAll;
  switch (action.type) {
    case ALL_BOOKS:
      booksAll = action.booksAll;
      break;
    case UPDATE_BOOKS:
      booksAll = state.booksAll;
      break;
    default:
      return {
        ...state
      };
  }
  return {
    ...state,
    sections: getSections(booksAll),
    booksAll: booksAll
  };
};

function getSections(booksAll) {
  return [
    getSection("Currently Reading", booksAll, "currentlyReading"),
    getSection("Want to Read", booksAll, "wantToRead"),
    getSection("Read", booksAll, "read")
  ];
}

function getSection(sectionTitle, booksAll, filter) {
  return {
    section: sectionTitle,
    books: getFilterSoltered(booksAll, filter)
  };
}

function getFilterSoltered(books, filter) {
  return sortBooks(filterBooks(books, filter));
}

function filterBooks(books, filter) {
  return books.filter(book => book.shelf === filter);
}

function sortBooks(books) {
  return books
    ? books.sort(function(a, b) {
        return a.title - b.title;
      })
    : books;
}

export default homerReducer;
