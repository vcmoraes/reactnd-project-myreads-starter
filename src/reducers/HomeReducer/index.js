import { ALL_BOOKS, UPDATE_BOOKS } from "../../actions/HomeActions/constants";

const initialState = {
  sections: []
};

const homerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BOOKS:
      var sections = [];

      const readingBooks = action.booksAll.filter(
        book => book.shelf === "currentlyReading"
      );
      var reading = { section: "Currently Reading", books: readingBooks };

      const wantReadBooks = action.booksAll.filter(
        book => book.shelf === "wantToRead"
      );
      var wantToRead = { section: "Want to Read", books: wantReadBooks };

      const readBooks = action.booksAll.filter(book => book.shelf === "read");
      var read = { section: "Read", books: readBooks };

      sections.push(reading);
      sections.push(wantToRead);
      sections.push(read);

      return {
        ...state,
        sections: sections
      };
    case UPDATE_BOOKS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default homerReducer;
