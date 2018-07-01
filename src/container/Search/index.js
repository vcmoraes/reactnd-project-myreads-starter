import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SearchActions from "../../actions/SearchActions";
import ListBook from "../../components/ListBook";

class Search extends React.Component {
  componentWillMount() {
    var lastQuery = this.props.searchData.lastQuery;
    this.setState({ query: lastQuery });
    this.props.searchBooksDispatch(lastQuery);
  }

  toHomeHandler = () => {
    this.props.toHome();
  };

  searchBooksHandler = query => {
    this.setState({ query: query.trim() });
    this.props.searchBooksDispatch(query.trim());
  };

  updateBookHandler = book => {
    this.props.updateBookDispatch(book);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.toHomeHandler}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"
              onChange={event => this.searchBooksHandler(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ListBook
            books={this.props.searchData.booksSearch}
            updateBookHandler={this.updateBookHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.searchData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchBooksDispatch: query =>
      dispatch(SearchActions.searchBooksDispatch(query)),
    updateBookDispatch: book =>
      dispatch(SearchActions.updateBookDispatch(book)),
    toHome: bindActionCreators(() => push("/"), dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
