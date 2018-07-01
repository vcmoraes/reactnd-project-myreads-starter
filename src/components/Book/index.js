import React, { Component } from "react";
import "./book.css";

class Book extends Component {
  changeValueHandler = book => {
    this.props.updateBookHandler(book);
  };
  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: getLinkImage(book)
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={book.shelf ? book.shelf : "none"}
                onChange={val => {
                  book.shelf = val.currentTarget.value;
                  this.changeValueHandler(book);
                }}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors &&
            book.authors.map((author, index) => (
              <div key={index} className="book-authors">
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

function getLinkImage(book) {
  if (book.imageLinks && book.imageLinks.smallThumbnail) {
    return "url(" + book.imageLinks.smallThumbnail + ")";
  } else {
    return "";
  }
}

export default Book;
