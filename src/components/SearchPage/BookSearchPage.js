import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class BookSearchPage extends Component {
  render() {
    const { books, onSearch, onResetSearch } = this.props;
    return (
      <div className='search-books'>
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResults books={books} />
      </div>
    );
  }
}
