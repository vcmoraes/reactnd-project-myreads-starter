import React from "react";
import { connect } from "react-redux";
import * as HomeActions from "../../actions/HomeActions";
import "./home.css";
import Book from "../../components/Book";

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  };

  componentDidMount() {
    this.props.allBooksDispatch();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.props.homeData.sections.map((section, index) => (
                  <div key={index} className="bookshelf">
                    <h2 className="bookshelf-title">{section.section}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {section.books.map((book, index) => (
                          <Book key={index} book={book} />
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeData: state.homeData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allBooksDispatch: () => dispatch(HomeActions.allBooksDispatch())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksApp);
