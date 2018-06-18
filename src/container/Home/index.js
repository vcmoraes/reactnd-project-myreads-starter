import React from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as HomeActions from "../../actions/HomeActions";
import "./home.css";
import ListBook from "../../components/ListBook";

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/

class BooksApp extends React.Component {
  componentDidMount() {
    this.props.allBooksDispatch();
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {this.props.homeData.sections.map((section, index) => (
                <div key={index} className="bookshelf">
                  <h2 className="bookshelf-title">{section.section}</h2>
                  <ListBook books={section.books} />
                </div>
              ))}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.props.toSearch()}>Add a book</a>
          </div>
        </div>
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
    allBooksDispatch: () => dispatch(HomeActions.allBooksDispatch()),
    toSearch: bindActionCreators(() => push("/search"), dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksApp);
