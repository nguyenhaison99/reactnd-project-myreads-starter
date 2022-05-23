import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class BookSearchPage extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className='search-books'>
        <SearchBar />
        <SearchResults books={books} />
      </div>
    );
  }
}
