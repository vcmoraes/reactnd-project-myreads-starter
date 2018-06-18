import React, { Component } from "react";
import Book from "../../components/Book";
import "./listbook.css";

class ListBook extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book, index) => <Book key={index} book={book} />)}
        </ol>
      </div>
    );
  }
}

export default ListBook;
