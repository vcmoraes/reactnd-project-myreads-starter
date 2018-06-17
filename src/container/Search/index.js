import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Search = props => (
  <div className="search-books">
    <div className="search-books-bar">
      <a className="close-search" onClick={() => props.toHome()}>
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
);

const mapDispatchToProps = dispatch => {
  return {
    toHome: bindActionCreators(() => push("/"), dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
